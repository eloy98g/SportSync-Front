import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

// Theme
import colors from "../../theme/colors";

const Loading = () => (
  <View style={styles.container}>
    <ActivityIndicator size={"small"} color={colors.primary} />
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
