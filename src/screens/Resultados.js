import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import SafeContainer from "../components/SafeContainer";
import { api, apiKey } from "../services/api-movidb";
import { useState, useEffect } from "react";
import CardFilme from "../components/CardFilme";
// import Separador from "../components/Separador";
import ListaVazia from "./ListaVazia";
import Loading from "../components/Loading";

// Prop route
// Prop especial e definida pelo react Navigation. Através dela é possivel acessar valores passados por meio de navegação entre elas
export default function Resultados({ route }) {
  // State para gerenciar os resultados da busca na API
  const [resultados, setResultados] = useState([]);

  // State para gerenciar o loading (mostrar/esconder)
  const [loading, setLoading] = useState(true);

  // capturando o parâmetro filme vindo de BuscarFilmes
  const { filme } = route.params;

  useEffect(() => {
    async function buscarFilmes() {
      try {
        const resposta = await api.get(`/search/movie`, {
          params: {
            include_adult: false,
            language: "pt-BR",
            query: filme,
            api_key: apiKey,
          },
        });
        // console.log(resposta.data.results);

        // Adicionando os resultados ao state
        setResultados(resposta.data.results);

        // desativamos o loading
        setLoading(false);
      } catch (error) {
        console.error("Deu ruim " + error.message);
      }
    }
    buscarFilmes();
  }, []);

  return (
    <SafeContainer>
      <View style={estilos.subContainer}>
        <Text style={estilos.texto}>You searched for: {filme}</Text>

        {loading && <Loading />}

        {!loading && (
          <View style={estilos.viewFilmes}>
            <FlatList
              data={resultados}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                return <CardFilme filme={item} />;
              }}
              ListEmptyComponent={ListaVazia}
              // ItemSeparatorComponent={Separador}
            />
          </View>
        )}
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
    fontSize: 20,
    fontWeight: "bold",
    borderColor: "#00aced",
    backgroundColor: "#00aced",
    borderWidth: 1,
    borderRadius: 10,
    padding: 8,
    color: "white",
    fontStyle: "italic",
  },
  viewFilmes: {
    marginVertical: 8,
  },
});
