import React, { useEffect } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";

// Components
import Screen from "../../../components/common/Screen";

// Theme
import colors from "../../../theme/colors";

const SplashScreen = ({ navigation }: any) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Home");
    }, 3000);
  }, []);

  return (
    <Screen>
      <Text>SplashupScreen</Text>
      <ActivityIndicator size="small" color={colors.primary} />
    </Screen>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
