import {
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
  Pressable,
} from "react-native";
import React from "react";
import SafeContainer from "../components/SafeContainer";
import logo from "../../assets/images/logo-tmdb.png";

export default function Sobre() {
  return (
    <SafeContainer>
      <View style={estilos.subContainer}>
        <Text style={estilos.subtitulo}>Sobre o app Dá Horas Filmes</Text>

        <Text>
          O <Text style={estilos.nomeApp}>Dá Horas Filmes</Text> é um aplicativo
          com a finalidade de permitir a busca por informações sobre filmes
          existentes na base de dados pública disponibilizada pelo site The
          Movie Database (TMDb).
        </Text>

        <Pressable
          style={estilos.imagem}
          onPress={() =>
            Linking.openURL("https://www.themoviedb.org/?language=pt-BR")
          }
        >
          <Image source={logo} />
        </Pressable>

        <Text style={estilos.texto}>
          Ao localizar um filme, o usuário pode visualizar informações como
          título, data de lançamento, nota média de avaliação e uma breve
          descrição sobre o filme e, caso queira, salvar estas informações em
          uma lista no próprio aplicativo para visualização posterior.
        </Text>

        <Text style={estilos.texto}>
          O aplicativo poderá receber novos recursos conforme o feedback e
          demanda dos usuários.
        </Text>

        <Text style={estilos.texto}>Dá Horas Filmes &copy; 2024</Text>
      </View>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  subContainer: {
    flex: 1,
    padding: 16,
  },
  subtitulo: {
    fontFamily: "NotoSans",
    fontWeight: "bold",
    marginVertical: 8,
    fontSize: 18,
  },
  texto: {
    marginVertical: 8,
  },
  nomeApp: {
    fontWeight: "bold",
    color: "#5351a6",
  },
  imagem: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});