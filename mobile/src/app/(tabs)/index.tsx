import SignOutButton from "@/components/SignOutButton";
import useUserSync from "@/hooks/useUserSync";
import { useClerk } from "@clerk/expo";
import { View, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  useUserSync();

  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>

      <SignOutButton />
    </SafeAreaView>
  );
};

export default HomeScreen;
