import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Theme
import { family } from "../../theme/fonts";
import colors from "../../theme/colors";

interface Props {
  error: string;
}
const Error = ({ error }: Props) => (
  <View style={styles.container}>
    <Text style={styles.error}>{error}</Text>
  </View>
);

export default Error;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  error: {
    fontFamily: family.normal,
    fontSize: 14,
    color: colors.red,
  },
});
