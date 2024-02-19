import SafeContainer from "./src/components/SafeContainer";
import Home from "./src/screens/Home";
import { StatusBar } from "react-native";
import Sobre from "./src/screens/Sobre";

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      {/* <Home /> */}
      <Sobre />
    </>
  );
}
