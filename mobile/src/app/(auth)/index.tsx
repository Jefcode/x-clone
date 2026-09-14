import {
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AuthImage from "@/assets/images/auth1.png";
import GoogleImage from "@/assets/images/google.png";
import useSocialAuth from "@/hooks/useSocialAuth";

export default function Index() {
  const { isLoading, handleSocialAuth } = useSocialAuth();

  return (
    <View className="flex-1 bg-white">
      <View className="flex-1 justify-center px-8">
        <View className="flex-1 justify-center">
          {/* Demo Image */}
          <View className="items-center relative mb-2">
            <Image
              source={AuthImage}
              className="size-96"
              resizeMode="contain"
            />
            <LinearGradient
              colors={["white", "transparent"]}
              start={{
                x: 0.5,
                y: 1,
              }}
              end={{
                x: 0.5,
                y: 0.5,
              }}
              style={{
                position: "absolute",
                insetBlock: 0,
                insetInline: -12,
              }}
            />
          </View>

          <View className="flex-col gap-2">
            <TouchableOpacity
              className="py-4 px-6 w-full flex justify-center items-center rounded-full border border-stone-300 bg-white h-16"
              disabled={isLoading}
              onPress={() => handleSocialAuth("oauth_google")}
            >
              {isLoading ? (
                <ActivityIndicator size="small" color="#b2b2b2" />
              ) : (
                <View className="flex flex-row items-center">
                  <Image source={GoogleImage} className="size-8 mr-3" />
                  <Text className="text-black font-medium text-base">
                    Continue with Google
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          </View>

          <Text className="text-center text-gray-500 text-xs leading-4 mt-6 px-2">
            By signing up, you agree to our{" "}
            <Text className="text-blue-500">Terms</Text>,{" "}
            <Text className="text-blue-500">Privacy Policy</Text>, and{" "}
            <Text className="text-blue-500">Cookie Use</Text>.
          </Text>
        </View>
      </View>
    </View>
  );
}
