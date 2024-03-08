import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default function Loading() {
  const [loading, setLoading] = useState(true);
  return (
    <View>{loading && <ActivityIndicator size="large" color="#5451a6" />}</View>
  );
}

const styles = StyleSheet.create({});
