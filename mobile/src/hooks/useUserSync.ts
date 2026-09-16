import { useApiClient, userApi } from "@/utils/api";
import { useAuth } from "@clerk/expo";
import { dataTagErrorSymbol, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { convertStackToolbarMenuPropsToRNHeaderItem } from "expo-router/build/layouts/stack-utils/toolbar/StackToolbarMenu";
import { useEffect } from "react";

export default function useUserSync() {
  const { isSignedIn } = useAuth();
  const api = useApiClient();

  const syncUserMutation = useMutation({
    mutationFn: () => userApi.syncUser(api),
    onSuccess: (response) =>
      console.log("User synced successfully:", response.data.user),
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        console.log("===== AXIOS ERROR =====");
        console.log("Message:", error.message);
        console.log("Status:", error.response?.status);
        console.log("Response data:", error.response?.data);
        console.log("Response headers:", error.response?.headers);
        console.log("Request URL:", error.config?.url);
        console.log("Request method:", error.config?.method);
      } else {
        console.log("Unknown error:", error);
      }
    },
  });

  useEffect(() => {
    if (isSignedIn && !syncUserMutation.data) {
      syncUserMutation.mutate();
    }
  }, [isSignedIn]);

  return null;
}
