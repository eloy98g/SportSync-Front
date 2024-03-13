import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Theme
import colors from "../../theme/colors";
import { family } from "../../theme/fonts";

interface Props {
  text: string;
}

const Tag = ({ text }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default Tag;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 26,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    backgroundColor: colors.secondary,
  },
  text: {
    fontFamily: family.semibold,
    fontSize: 10,
    color: colors.white,
  },
});
