import React from "react";
import { StyleSheet, Text } from "react-native";

// Theme
import colors from "../../../../theme/colors";
import { family } from "../../../../theme/fonts";

interface Props {
  text: string;
}
const Title = ({ text }: Props) => <Text style={styles.title}>{text}</Text>;

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: family.bold,
    fontSize: 18,
    color: colors.grey,
  },
});
