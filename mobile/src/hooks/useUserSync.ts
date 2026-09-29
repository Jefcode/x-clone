import { useApiClient, userApi } from "@/utils/api";
import { useAuth } from "@clerk/expo";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";

export default function useUserSync() {
  const { isSignedIn } = useAuth();
  const api = useApiClient();

  const syncUserMutation = useMutation({
    mutationFn: () => userApi.syncUser(api),
    onSuccess: (response) =>
      console.log("User synced successfully:", response.data.user),
    onError: (error) => console.error("User sync failed:", error),
  });

  useEffect(() => {
    if (isSignedIn && !syncUserMutation.data) {
      syncUserMutation.mutate();
    }
  }, [isSignedIn]);

  return null;
}
