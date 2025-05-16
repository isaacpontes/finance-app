import { TransactionsContextProvider } from "@/contexts/TransactionsContext";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <TransactionsContextProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </TransactionsContextProvider>
  );
}
