import {
  StyleSheet,
  Text,
  View,
  Vibration,
  Alert,
  Button,
  ScrollView,
  TextInput,
} from "react-native";
import React from "react";
import SafeContainer from "../components/SafeContainer";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function BuscarFilmes() {
  const [text, onChangeText] = React.useState("");

  const handleInputSubmit = () => {
    if (text.trim() === "") {
      Alert.alert("Ops", "Você deve digitar um filme!");
    } else {
      Vibration.vibrate();
      Alert.alert("Você procurou por:", text);
    }
  };

  return (
    <SafeContainer>
      <View style={estilos.subContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={estilos.texto}>
            <Text>
              Star Trek? O Poderoso Chefão? A trilogia Senhor dos Anéis?
            </Text>

            <Text>Localize um filme que você viu ou gostaria de ver</Text>

            <View style={estilos.inputFormat}>
              <MaterialCommunityIcons
                name="movie-open-play"
                size={55}
                color="#5451a6"
              />
              <TextInput
                style={estilos.input}
                onChangeText={onChangeText}
                underlineColorAndroid="transparent"
                value={text}
                placeholder="Digite o filme"
                enterKeyHint="search"
                onSubmitEditing={handleInputSubmit}
              />
            </View>

            <Button title="Procurar" onPress={handleInputSubmit} />
          </View>
        </ScrollView>
      </View>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "80%",
  },
  inputFormat: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  texto: {
    padding: 10,
  },
});
