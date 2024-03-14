import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  Alert,
} from "react-native";
import SafeContainer from "../components/SafeContainer";

import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Favoritos() {
  // State para registra os dados carregados do storage
  const [listaFavoritos, setListaFavoritos] = useState([]);

  // useEffect será disparado assim que o usuário entrar na tela Favoritos (portanto, somente uma vez)
  useEffect(() => {
    const carregarFavoritos = async () => {
      try {
        // Acessamos o storage criado previamente e guardamos as strings de dados.
        const dados = await AsyncStorage.getItem("@favoritosdahora");

        // Se houver dados, transformamos em objetos (JSON.parse) e atualizamos o state com a lista de favoritos
        if (dados) {
          setListaFavoritos(JSON.parse(dados));
        }
      } catch (error) {
        console.log("Erro ao  carregar os dados: " + error);
        Alert.alert("Erro", "Erro ao carregar os dados");
      }
    };
    carregarFavoritos();
  }, []);

  console.log(listaFavoritos);

  return (
    <SafeContainer>
      <View style={estilos.subContainer}>
        <View style={estilos.viewFavoritos}>
          <Text style={estilos.texto}>
            {" "}
            Quantidade: {listaFavoritos.length}
          </Text>
          <Pressable style={estilos.botao}>
            <Text style={estilos.textoBotao}>Excluir favoritos</Text>
          </Pressable>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {listaFavoritos.map((filme) => {
            return <Text key={filme.id}>{filme.title}</Text>;
          })}
        </ScrollView>
      </View>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  subContainer: {
    flex: 1,
    padding: 16,
    width: "100%",
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
});
