import { useClerk } from "@clerk/expo";
import { View, Text, Button } from "react-native";

const HomeScreen = () => {
  const { signOut } = useClerk();

  return (
    <View>
      <Text>HomeScreen</Text>

      <Button title="Logout" onPress={() => signOut()} />
    </View>
  );
};

export default HomeScreen;
