import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

// Theme
import colors from "../../theme/colors";

interface Props {
  color?: string;
  size?: number | "small" | "large" | undefined;
}
const Loading = ({ color = colors.primary, size = "small" }: Props) => (
  <View style={styles.container}>
    <ActivityIndicator size={size} color={color} />
  </View>
);

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
