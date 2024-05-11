import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Theme
import { family } from "../../theme/fonts";
import colors from "../../theme/colors";

interface Props {
  error: string;
  color?: string;
}
const Error = ({ error, color }: Props) => (
  <View style={styles.container}>
    <Text style={[styles.error, { color }]}>{error}</Text>
  </View>
);

export default Error;

Error.defaultProps = {
  color: colors.red,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  error: {
    fontFamily: family.normal,
    fontSize: 14,
  },
});
