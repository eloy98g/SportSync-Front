import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

// Theme
import colors from "../../theme/colors";
import { family } from "../../theme/fonts";

type SIZE = "small" | "normal";

interface Props {
  text: string;
  onPress: () => void;
  size?: SIZE;
}

const Action = ({ text, onPress, size = "normal" }: Props) => {
  return (
    <TouchableOpacity
      style={[styles.container, size === "small" && { height: 20 }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Action;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 26,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  text: {
    fontFamily: family.semibold,
    fontSize: 10,
    color: colors.primary,
  },
});
