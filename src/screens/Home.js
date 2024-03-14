import { StyleSheet } from "react-native";
import SafeContainer from "../components/SafeContainer";
import logo from "../../assets/images/bp.jpg";
import { Ionicons } from "@expo/vector-icons";
import { Image, Pressable, Text, View } from "react-native";

export default function Home({ navigation }) {
  return (
    <>
      <SafeContainer>
        <View style={estilos.viewLogo}>
          <Image source={logo} style={estilos.logo} />
          <Text style={estilos.titulo}>Dá Hora Filmes</Text>
        </View>

        <View style={estilos.viewBotoes}>
          <Pressable
            style={estilos.botao}
            onPress={() => navigation.navigate("BuscarFilmes")}
          >
            <Text style={estilos.textoBotao}>
              <Ionicons name="search" size={12} color="white" />
              Buscar Filmes
            </Text>
          </Pressable>
          <Pressable
            style={estilos.botao}
            onPress={() => {
              navigation.navigate("Favoritos");
            }}
          >
            <Text style={estilos.textoBotao}>
              <Ionicons name="star" size={12} color="gold" />
              Favoritos
            </Text>
          </Pressable>
        </View>

        <View style={estilos.viewRodape}>
          <Pressable
            style={estilos.botaoRodape}
            onPress={() => navigation.navigate("Privacidade")}
          >
            <Text style={estilos.textoBotao}>
              <Ionicons name="lock-closed" size={16} color="white" />
              Privacidade
            </Text>
          </Pressable>

          <Pressable
            style={estilos.botaoRodape}
            onPress={() => navigation.navigate("Sobre")}
          >
            <Text style={estilos.textoBotao}>
              <Ionicons name="information-circle" size={16} color="white" />
              Sobre
            </Text>
          </Pressable>
        </View>
      </SafeContainer>
    </>
  );
}

const estilos = StyleSheet.create({
  viewLogo: {
    flex: 3,
    width: "80%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: "99%",
    height: "100%",
  },
  titulo: {
    fontFamily: "Monoton-Regular",
    fontSize: 28,
    color: "#5a51a6",
  },

  viewBotoes: {
    flex: 2,
    flexDirection: "row",
    alignItems: "flex-start",
    width: "80%",
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
    backgroundColor: "#5451a6",
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  botaoRodape: {
    padding: 16,
  },
});
