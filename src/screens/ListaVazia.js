import { StyleSheet, Text, View, Image } from "react-native";
import notFound from "../../assets/images/notfound.webp";
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
    height: 420,
    width: "100%",
  },
  texto: {
    fontWeight: "bold",
    marginVertical: 12,
  },
});
