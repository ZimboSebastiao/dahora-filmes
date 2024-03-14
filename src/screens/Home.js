import { StyleSheet } from "react-native";
import SafeContainer from "../components/SafeContainer";
import backgroundImage from "../../assets/images/bpp.png";
import { Ionicons } from "@expo/vector-icons";
import { Image, Pressable, Text, View, ImageBackground } from "react-native";
import { Button } from "@rneui/base";

export default function Home({ navigation }) {
  return (
    <>
      <SafeContainer>
        <ImageBackground
          source={backgroundImage}
          resizeMode="cover"
          style={estilos.background}
        >
          <View style={estilos.viewLogo}>
            <Text style={estilos.titulo}>Welcome To Flixity</Text>
          </View>

          <View style={estilos.viewBotoes}>
            <Button
              color="error"
              style={estilos.botao}
              onPress={() => navigation.navigate("BuscarFilmes")}
            >
              <Text style={estilos.textoBotao}>Buscar Filmes</Text>
            </Button>
            <Button
              color="error"
              style={estilos.botao}
              onPress={() => {
                navigation.navigate("Favoritos");
              }}
            >
              <Text style={estilos.textoBotao}>Favoritos</Text>
            </Button>
          </View>

          <View style={estilos.viewRodape}>
            <Pressable
              style={estilos.botaoRodape}
              onPress={() => navigation.navigate("Privacidade")}
            >
              <Text style={estilos.textoBotao}>Privacidade</Text>
            </Pressable>

            <Pressable
              style={estilos.botaoRodape}
              onPress={() => navigation.navigate("Sobre")}
            >
              <Text style={estilos.textoBotao}>Sobre</Text>
            </Pressable>
          </View>
        </ImageBackground>
      </SafeContainer>
    </>
  );
}

const estilos = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
  },
  viewLogo: {
    flex: 4.5,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  titulo: {
    fontFamily: "Roboto",
    fontSize: 32,
    color: "#ffffff",
    fontWeight: "bold",
  },

  viewBotoes: {
    flex: 2,
    flexDirection: "row",
    alignItems: "flex-start",
    width: "100%",
    justifyContent: "space-evenly",
  },
  botao: {
    color: "#5451a6",
    padding: 16,
    backgroundColor: "#5451a6",
  },
  textoBotao: {
    color: "#fff",
    fontFamily: "NotoSans",
    fontWeight: "bold",
    fontSize: 16,
  },
  viewRodape: {
    width: "100%",
    backgroundColor: "rgba(84, 81, 166, 0.4)",
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  botaoRodape: {
    padding: 16,
  },
});
