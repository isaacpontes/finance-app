import { TransactionsContextProvider } from "@/contexts/TransactionsContext";
import { Stack } from "expo-router";
// import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";
// import { useEffect } from "react";

// SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  // const [loaded, error] = useFonts({
  //   "NunitoSans": require('@/assets/fonts/NunitoSans.ttf')
  // })

  // useEffect(() => {
  //   if (loaded || error) {
  //     SplashScreen.hideAsync()
  //   }
  // }, [loaded, error])

  // if (!loaded && !error) {
  //   return null
  // }

  return (
    <TransactionsContextProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </TransactionsContextProvider>
  );
}
