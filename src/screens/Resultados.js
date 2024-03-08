import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import SafeContainer from "../components/SafeContainer";
import { api, apiKey } from "../services/api-movidb";
import { useState, useEffect } from "react";

// Prop route
// Prop especial e definida pelo react Navigation. Através dela é possivel acessar valores passados por meio de navegação entre elas
export default function Resultados({ route }) {
  // State para gerenciar os resultados da busca na API
  const [resultados, setResultados] = useState([]);

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
      } catch (error) {
        console.error("Deu ruim " + error.message);
      }
    }
    buscarFilmes();
  }, []);

  return (
    <SafeContainer>
      <View style={estilos.subContainer}>
        <Text style={estilos.texto}>Você buscou por: {filme}</Text>
        <View style={estilos.viewFilmes}></View>
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
  viewFilmes: {
    marginVertical: 8,
  },
});
