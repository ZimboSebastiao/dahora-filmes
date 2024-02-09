import { useCallback } from "react";
import {
  Button,
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import logo from "./assets/images/logo.png";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

// Manter a tela splash visível enquanto não programrmos a ação de ocultar
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "Monoton-Regular": require("./assets/fonts/Monoton-Regular.ttf"),
  });

  // função atrelada ao hook callback para garantir que os dados serão armazenado no cache da memória
  const aoAtualizarLayout = useCallback(async () => {
    // se estiver tudo ok com o carregamento
    if (fontsLoaded || fontError) {
      // escondemos a splashScreen
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={estilos.container} onLayout={aoAtualizarLayout}>
        <View style={estilos.viewLogo}>
          <Image source={logo} style={estilos.logo} />
          <Text>Dá Hora Filmes</Text>
        </View>

        <View style={estilos.viewBotoes}>
          <Pressable style={estilos.botao}>
            <Text style={estilos.textoBotao}>
              <Ionicons name="search" size={12} color="white" />
              Buscar Filmes
            </Text>
          </Pressable>
          <Pressable style={estilos.botao}>
            <Text style={estilos.textoBotao}>
              <Ionicons name="star" size={12} color="gold" />
              Favoritos
            </Text>
          </Pressable>
        </View>

        <View style={estilos.viewRodape}>
          <Button title="Privacidade" />
          <Button title="Sobre" />
        </View>
      </SafeAreaView>
    </>
  );
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  viewLogo: {
    flex: 3,
    width: "80%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 128,
    height: 128,
  },
  viewBotoes: {
    flex: 2,
    flexDirection: "row",
    alignItems: "flex-start",
    width: "80%",
    justifyContent: "space-evenly",
  },
  botao: {
    borderStyle: "solid",
    borderWidth: 2,
    padding: 16,
    backgroundColor: "#5451a6",
  },
  textoBotao: {
    color: "#fff",
  },
  viewRodape: {
    width: "80%",
    backgroundColor: "red",
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
