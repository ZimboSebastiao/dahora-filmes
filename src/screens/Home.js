import { StyleSheet } from "react-native";
import SafeContainer from "../components/SafeContainer";
import backgroundImage from "../../assets/images/bpp.png";
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
            <Text style={estilos.titulo}>
              Let´s play your favorite movie in Flixity
            </Text>
            <Text style={estilos.texto}>
              Movie & tv information updates movie trailer
            </Text>
          </View>

          <View style={estilos.viewBotoes}>
            <Button
              color="error"
              style={estilos.botao}
              onPress={() => navigation.navigate("BuscarFilmes")}
            >
              <Text style={estilos.textoBotao}>Search movies</Text>
            </Button>
            <Button
              color="error"
              style={estilos.botao}
              onPress={() => {
                navigation.navigate("Favoritos");
              }}
            >
              <Text style={estilos.textoBotao}>Favorites</Text>
            </Button>
          </View>

          <View style={estilos.viewRodape}>
            <Pressable
              style={estilos.botaoRodape}
              onPress={() => navigation.navigate("Privacidade")}
            >
              <Text style={estilos.textoBotao}>Privacy</Text>
            </Pressable>

            <Pressable
              style={estilos.botaoRodape}
              onPress={() => navigation.navigate("Sobre")}
            >
              <Text style={estilos.textoBotao}>About</Text>
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
    opacity: 0.8,
  },
  viewLogo: {
    flex: 4.5,
    backgroundColor: "rgba(0, 0, 78, 0.3)",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  titulo: {
    fontFamily: "Roboto",
    fontSize: 28,
    color: "#ffffff",
    fontWeight: "bold",
    textAlign: "center",
  },
  texto: {
    fontFamily: "Roboto",
    fontSize: 12,
    color: "#BABABA",
    textAlign: "center",
    paddingBottom: 10,
    paddingTop: 16,
  },

  viewBotoes: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    width: "100%",
    padding: 10,
    justifyContent: "space-between",
    backgroundColor: "rgba(0, 0, 78, 0.3)",
  },
  botao: {
    color: "#5451a6",
    padding: 16,
  },
  textoBotao: {
    color: "#fff",
    fontFamily: "NotoSans",
    fontWeight: "bold",
    fontSize: 16,
  },
  viewRodape: {
    width: "100%",
    backgroundColor: "rgba(1, 1, 1, 0.9)",
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  botaoRodape: {
    padding: 16,
  },
});
