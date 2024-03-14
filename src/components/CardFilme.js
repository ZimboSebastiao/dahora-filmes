import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Alert,
  Vibration,
} from "react-native";
import imagemAlternativa from "../../assets/images/foto-alternativa.jpg";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
// Hook necessário pois não estamos em uma tela com acesso à prop navigation
import { useNavigation } from "@react-navigation/core";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CardFilme({ filme }) {
  const { title, poster_path } = filme;

  // Acessar recursos de navegação
  const navigation = useNavigation();

  const salvar = async () => {
    // Alert.alert("Favoritos", "Salvando...");

    try {
      // 1) Verificar/carregar os favoritos armazenados no AsyncStorage. Usamos o getItem do Asyncstorage para analisar se existe um armazenamento com o nome indicado (@favoritosdahora). Existindo, ele é carregado para const filmesFavoritos. Se não existir, será criado posteriomente.
      const filmesFavoritos = await AsyncStorage.getItem("@favoritosdahora");

      // 2) Verificar/Criar uma lista de filmes favoritos (dados). Se filmes favoritos existir (ou seja, tem dados no storage), pegamos estes dados (strings) e convertemos em objeto (JSON.parse). Caso contrário, listaDeFilmes será um array vazio.
      const listaDeFilmes = filmesFavoritos ? JSON.parse(filmesFavoritos) : [];

      // 3) Verificar se já tem algum filme na lista
      const jaTemFilme = listaDeFilmes.some((filmeNaLista) => {
        return filmeNaLista.id === filme.id;
      });

      // 4) Se o filme não estiver na lista, então vamos colocá-lo

      // 4.1) Se já temfilme, avisaremos so usuário

      if (jaTemFilme) {
        Alert.alert("Ops!", "Você já salvou este filme!");
        Vibration.vibrate();
        return;
      }

      // 4.2) Senão, vamos colocar na lista
      listaDeFilmes.push(filme);

      // 5) Usamos o AsyncStorage para gravar no armazenamento offline do dispositivo
      await AsyncStorage.setItem(
        "@favoritosdahora",
        JSON.stringify(listaDeFilmes)
      );

      Alert.alert("Favoritos", `${title} foi salvo com sucesso!`);
    } catch (error) {
      console.log("Erro: " + error);
      Alert.alert("Erro", "Ocorreu um erro ao salvar filme...");
    }
  };

  return (
    <View style={estilos.card}>
      <Image
        resizeMode="cover"
        style={estilos.imagem}
        source={
          poster_path
            ? { uri: `https://image.tmdb.org/t/p/w500/${poster_path}` }
            : imagemAlternativa
        }
      />
      <View style={estilos.corpo}>
        <Text style={estilos.titulo}>{title}</Text>
        <View style={estilos.botoes}>
          <Pressable
            style={estilos.botao}
            onPress={() => navigation.navigate("Detalhes", { filme })}
          >
            <Text style={estilos.textoBotao}>
              <FontAwesome5 name="book-open" size={12} />
              Leia mais
            </Text>
          </Pressable>
          <Pressable style={estilos.botao} onPress={salvar}>
            <Text style={estilos.textoBotao}>
              <Ionicons name="add-circle" size={12} />
              Salvar
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  card: {
    marginVertical: 4,
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "#5451a6",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imagem: {
    height: 150,
    width: 100,
    flex: 1,
  },
  corpo: { flex: 2 },
  titulo: {
    backgroundColor: "#5451a6",
    color: "white",
    textAlign: "center",
    paddingVertical: 8,
    fontSize: 16,
  },
  botoes: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 8,
  },
  botao: {
    borderColor: "#5451a6",
    borderWidth: 1,
    padding: 8,
  },
  textoBotao: {
    color: "#5451a6",
    fontSize: 12,
    textTransform: "uppercase",
  },
});
