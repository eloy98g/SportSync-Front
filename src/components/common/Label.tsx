import React from "react";
import { StyleSheet, Text } from "react-native";

// Theme
import colors from "../../theme/colors";
import { family } from "../../theme/fonts";

interface Props {
  text: string;
}
const Label = ({ text }: Props) => <Text style={styles.title}>{text}</Text>;

export default Label;

const styles = StyleSheet.create({
  title: {
    fontFamily: family.light,
    fontSize: 14,
    color: colors.grey,
  },
});
