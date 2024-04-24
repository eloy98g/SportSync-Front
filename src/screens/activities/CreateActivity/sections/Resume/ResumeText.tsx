import React from "react";
import { StyleSheet, Text } from "react-native";

// Theme
import colors from "../../../../../theme/colors";
import { family } from "../../../../../theme/fonts";

interface Props {
  text: string;
}

const ResumeText = ({ text }: Props) => <Text style={styles.text}>{text}</Text>;

export default ResumeText;

const styles = StyleSheet.create({
  text: {
    fontFamily: family.normal,
    color: colors.black,
    fontSize: 18,
  },
});
