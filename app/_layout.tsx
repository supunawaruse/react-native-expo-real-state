import { SplashScreen, Stack, usePathname, useRouter, useSegments } from "expo-router";
import "./global.css";
import { useFonts } from "expo-font"
import { useEffect } from "react";
import { ClerkProvider, ClerkLoaded, useAuth } from '@clerk/clerk-expo'
import { tokenCache } from "@/utils/cache";
import { ActivityIndicator, View } from "react-native";

export default function RootLayout() {
  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!
  //Adding fonts and loading them to the application
  const [fontsLoaded] = useFonts({
    "Rubik-Bold": require("../assets/fonts/Rubik-Bold.ttf"),
    "Rubik-ExtraBold": require("../assets/fonts/Rubik-ExtraBold.ttf"),
    "Rubik-Light": require("../assets/fonts/Rubik-Light.ttf"),
    "Rubik-Medium": require("../assets/fonts/Rubik-Medium.ttf"),
    "Rubik-Regular": require("../assets/fonts/Rubik-Regular.ttf"),
    "Rubik-SemiBold": require("../assets/fonts/Rubik-SemiBold.ttf"),
  });

  const router = useRouter()
  const segments = useSegments()
  const pathName = usePathname()

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded])

  if (!publishableKey) {
    throw new Error(
      'Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env',
    )
  }
  if (!fontsLoaded) return null;

  const InitialLayout = () => {
    const { isLoaded, isSignedIn } = useAuth()


    useEffect(() => {
      if (!isLoaded) return;

      const inAuthGroup = segments[0] === '(authenticated)'

      if (isSignedIn && !inAuthGroup) {
        router.replace('/(authenticated)/(tabs)/home')
      } else if (!isSignedIn && pathName !== '/') {
        router.replace('/')
      }

    }, [isLoaded, isSignedIn])

    if (!isLoaded) {
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" className="color-danger bg-blue-600" />
      </View>
    }
    return (
      <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: '#fff' } }}>
        <Stack.Screen name="index" />
      </Stack>
    )
  }

  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
      <ClerkLoaded>
        <InitialLayout />
      </ClerkLoaded>
    </ClerkProvider>
  );
}
