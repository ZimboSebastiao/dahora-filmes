import { StyleSheet, Text, View, Image } from "react-native";
import notFound from "../../assets/images/404.jpg";
import { Entypo } from "@expo/vector-icons";

export default function ListaVazia() {
  return (
    <View>
      <Text style={estilos.texto}>
        O filme não foi localizado{" "}
        <Entypo name="emoji-sad" size={16} color="#5451a6" />
      </Text>
      <Image resizeMode="cover" style={estilos.imagem} source={notFound} />
    </View>
  );
}

const estilos = StyleSheet.create({
  imagem: {
    height: 150,
    width: "90%",
  },
  texto: {
    fontWeight: "bold",
    marginVertical: 12,
  },
});
