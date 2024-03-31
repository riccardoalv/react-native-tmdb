import { Stack } from "expo-router/stack";
import { useFonts } from "expo-font";

export default function AppLayout() {
  const [fontsLoaded, fontError] = useFonts({
    Poppins: require("../assets/fonts/Poppins/Poppins-Regular.ttf"),
    PoppinsSemiBold: require("../assets/fonts/Poppins/Poppins-SemiBold.ttf"),
    MontSerrat: require("../assets/fonts/Montserrat/Montserrat-VariableFont_wght.ttf"),
  });

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
