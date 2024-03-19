import React from "react";
import { StyleSheet, Text } from "react-native";

// Theme
import colors from "../../../../../../theme/colors";
import { family } from "../../../../../../theme/fonts";

interface Props {
  text: string;
}

const Title = ({ text }: Props) => <Text style={styles.text}>{text}</Text>;

export default Title;

const styles = StyleSheet.create({
  text: {
    fontFamily: family.normal,
    fontSize: 18,
    color: colors.grey,
  },
});
