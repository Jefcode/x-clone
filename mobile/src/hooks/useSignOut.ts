import { useClerk } from "@clerk/expo";
import { View, Text, Alert } from "react-native";

export default function useSignOut() {
  const { signOut } = useClerk();

  const handleSignOut = () => {
    Alert.alert("Logout", "Are you sure you want to log out?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Logout",
        style: "destructive",
        onPress: () => signOut(),
      },
    ]);
  };

  return handleSignOut;
}
