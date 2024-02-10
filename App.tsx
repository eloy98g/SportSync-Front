import { useEffect } from "react";
import { StyleSheet, View } from "react-native";

// Navigator
import AppNavigator from "./src/navigation/AppNavigator";

// Theme
import { family, loadFonts } from "./src/theme/fonts";

export default function App() {
  useEffect(() => {
    loadFonts();
  }, []);

  return (
    <View style={styles.container}>
      <AppNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: family.semibold,
    color: "black",
  },
});
