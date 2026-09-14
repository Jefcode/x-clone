import SignOutButton from "@/components/SignOutButton";
import { useClerk } from "@clerk/expo";
import { View, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>

      <SignOutButton />
    </SafeAreaView>
  );
};

export default HomeScreen;
