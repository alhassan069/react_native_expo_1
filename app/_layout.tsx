import { Stack } from "expo-router";
import '../global.css';

export default function RootLayout() {
  return ( <Stack >
    <Stack.Screen name="index" options={{headerShown: false}} />
    <Stack.Screen name="Login" />
    <Stack.Screen name="Signup" />
    <Stack.Screen name="Scrollview" />
    <Stack.Screen name="FlatList" />
    <Stack.Screen name="Leaderboard" />
    <Stack.Screen name="Modal" options={{headerShown: false}} />
    <Stack.Screen name="Tailwind" options={{headerShown: false}} />
  </Stack>);
}
  