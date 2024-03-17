import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Config
import { version } from "../../config";

// Theme
import colors from "../theme/colors";
import { family } from "../theme/fonts";

const Version = () => (
  <View style={styles.container}>
    <Text style={styles.text}>{version}</Text>
  </View>
);

export default Version;

const styles = StyleSheet.create({
  container: { width: "100%", alignItems: "center" },
  text: {
    fontFamily: family.normal,
    color: colors.grey,
    fontSize: 14,
  },
});
