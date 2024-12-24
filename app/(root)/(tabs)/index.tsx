import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="my-10 text-blue-600 font-rubik text-3xl">Sample Text</Text>
      <Link href="/signin">SignIn</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/explore">Explore</Link>
      <Link href={{pathname: "/(root)/properties/[id]", params: { id: 5 }}}>Property</Link>
    </View>
  );
}
