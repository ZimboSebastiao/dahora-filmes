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
import { Ionicons } from "@expo/vector-icons";
import { Image } from "@rneui/themed";
import imagemAlternativa from "../../assets/images/foto-alternativa.jpg";

export default function Favoritos({ navigation }) {
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

  // console.log(listaFavoritos)

  const excluirTodosFavoritos = async () => {
    Alert.alert(
      "Excluir Todos?",
      "Tem certeza que deseja excluir todos os favoritos?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Confirmar",
          style: "destructive",
          onPress: async () => {
            await AsyncStorage.removeItem("@favoritosdahora");

            setListaFavoritos([]);
          },
        },
      ]
    );
  };

  return (
    <SafeContainer>
      <View style={estilos.subContainer}>
        <View style={estilos.viewFavoritos}>
          <Text style={estilos.texto}>
            {" "}
            Quantidade: {listaFavoritos.length}
          </Text>
          <Pressable
            style={estilos.botaoExcluirFavoritos}
            onPress={excluirTodosFavoritos}
          >
            <Text style={estilos.textoBotao}>Excluir favoritos</Text>
          </Pressable>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {listaFavoritos.map((filme) => {
            return (
              <View key={filme.id} style={estilos.item}>
                <Pressable
                  style={estilos.botaoFilme}
                  onPress={() => navigation.navigate("Detalhes", { filme })}
                >
                  <Text style={estilos.titulo}>{filme.title}</Text>
                </Pressable>

                <Pressable style={estilos.botaoExcluir}>
                  <Ionicons name="trash" size={25} color="red" />
                </Pressable>
              </View>
            );
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
  texto: {
    marginVertical: 8,
    color: "white",
    fontSize: 18,
  },
  viewFavoritos: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  botaoExcluirFavoritos: {
    borderWidth: 1,
    borderColor: "red",
    padding: 5,
    borderRadius: 10,
    backgroundColor: "red",
  },
  textoBotao: {
    color: "white",
  },
  titulo: {
    color: "white",
  },
  item: {
    borderWidth: 1,
    borderColor: "#00aced",
    padding: 8,
    marginBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#00aced",
    borderRadius: 10,
  },
});
