import React from "react";
import { StyleSheet, Text } from "react-native";

// Hooks
import { useAppSelector } from "../../../hooks";

// Theme
import colors from "../../../theme/colors";
import { family } from "../../../theme/fonts";

const Title = () => {
  const name = useAppSelector((state) => state.user.user.name);
  return <Text style={styles.title}>Hola {name}!</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    color: colors.secondary,
    fontSize: 22,
    fontFamily: family.semibold,
  },
});
