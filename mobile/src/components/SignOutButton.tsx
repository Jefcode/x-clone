import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Feather from "@react-native-vector-icons/feather";
import useSignOut from "@/hooks/useSignOut";

const SignOutButton = () => {
  const signOut = useSignOut();

  return (
    <TouchableOpacity onPress={() => signOut()}>
      <Feather name="log-out" size={24} color="#E0245E" />
    </TouchableOpacity>
  );
};

export default SignOutButton;
