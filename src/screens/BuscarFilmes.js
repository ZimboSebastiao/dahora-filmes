import {
  StyleSheet,
  Text,
  View,
  Vibration,
  Alert,
  Button,
} from "react-native";
import React, { useState } from "react";
import SafeContainer from "../components/SafeContainer";
import { SearchBar } from '@rneui/themed';
import { Icon } from '@rneui/themed';

export default function BuscarFilmes({ navigation }) {
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
      return Alert.alert("Ops!", "You must enter the name of the movie!");
    }
    // Redirecionamento para tela de resultados passando o filme para ela através do segundo parâmetro do método navigate. obs: não se esqueça de definir a prop navigation no componente
    navigation.navigate("Resultados", { filme });
  };

  return (
    <SafeContainer >
      <View style={estilos.subContainer}>
        
        <View style={estilos.inputFormat}>
          <SearchBar
            ref={search => this.search = search}
            containerStyle={estilos.searchContainer} 
            inputContainerStyle={estilos.inputContainerStyle}
            round
            underlineColorAndroid="transparent"
            onChangeText={filmeDigitado}
            value={filme}
            placeholder="Search"
            placeholderTextColor="#00aced"
            maxLength={40}
            enterKeyHint="search"
            onSubmitEditing={buscarFilmes}
            autoFocus
            
          />

 
          <Icon name='manage-search' size={38} color='#00aced' onPress={buscarFilmes} style={estilos.icon} /> 

        </View>

      </View>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({

  subContainer: {
    flex: 1,
    width: "100%"
  },
  inputFormat: {
    flexDirection: "row", 
    alignItems: "center",
    justifyContent: "space-evenly",

  },
  searchContainer: {
    width:"82%",
    backgroundColor: "transparent",
    borderTopWidth: 0, // Remove a borda superior
    borderBottomWidth: 0, // Remove a borda inferior
  },
  icon: {
    backgroundColor: "#2D2D2D",
    borderRadius: 10,
    height: 45,
    width: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  
});
