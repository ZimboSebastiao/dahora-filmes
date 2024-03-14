import { SafeAreaView, StyleSheet } from "react-native";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync();

export default function SafeContainer({ children }) {
  const [fontsLoaded, fontError] = useFonts({
    "Monoton-Regular": require("../../assets/fonts/Monoton-Regular.ttf"),
    NotoSans: require("../../assets/fonts/NotoSans-VariableFont.ttf"),
  });

  const aoAtualizarLayout = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaView style={estilos.container} onLayout={aoAtualizarLayout}>
      {children}
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "#1D1D1D",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
