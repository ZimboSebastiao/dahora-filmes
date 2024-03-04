import {
  StyleSheet,
  Text,
  View,
  Vibration,
  Alert,
  Button,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import SafeContainer from "../components/SafeContainer";
import { Ionicons } from "@expo/vector-icons";

export default function BuscarFilmes() {
  const [filme, setFilme] = useState("");

  // Capturando e registrando em state o filme que o usuario deseja pesquisar
  const filmeDigitado = (valorDigitado) => {
    // valorDigitado á um parametro automatico vindo do evento onChangeText
    setFilme(valorDigitado);
    // console.log(valorDigitado);
  };

  const buscarFilmes = () => {
    if (!filme) {
      Vibration.vibrate(500);
      return Alert.alert("Ops!", "Você deve digitar um filme!");
    }
    Alert.alert("Você procurou por: ", filme);
  };

  return (
    <SafeContainer>
      <View style={estilos.subContainer}>
        <Text>Star Trek? O Poderoso Chefão? A trilogia Senhor dos Anéis?</Text>

        <Text>Localize um filme que você viu ou gostaria de ver</Text>

        <View style={estilos.inputFormat}>
          <Ionicons name="film" size={44} color="#5451a6" />
          <TextInput
            style={estilos.input}
            onChangeText={filmeDigitado}
            underlineColorAndroid="transparent"
            value={filme}
            placeholder="Digite o filme"
            placeholderTextColor="#5451a6"
            maxLength={40}
            enterKeyHint="search"
            onSubmitEditing={buscarFilmes}
            autoFocus
          />
        </View>

        <Button title="Procurar" onPress={buscarFilmes} />
      </View>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  subContainer: {
    flex: 1,
    padding: 16,
  },
  input: {
    borderWidth: 1,
    padding: 8,
    flex: 0.95,
    borderColor: "#5451a6",
  },
  inputFormat: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
  },
});
