import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Components
import Divider from "../../../../../components/common/Divider";

// Theme
import { family } from "../../../../../theme/fonts";
import colors from "../../../../../theme/colors";

const TextLineDivider = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Divider height={8} />
      <Text style={styles.text}>VS</Text>
      <Divider height={8} />
      <View style={styles.line} />
    </View>
  );
};

export default TextLineDivider;

const styles = StyleSheet.create({
  container: { flexDirection: "column", alignItems: "center" },
  line: {
    flex: 1,
    width: 1,
    borderLeftColor: colors.lightenGrey,
    borderLeftWidth: 1,
  },
  text: {
    fontFamily: family.normal,
    color: colors.lightenGrey,
  },
});
