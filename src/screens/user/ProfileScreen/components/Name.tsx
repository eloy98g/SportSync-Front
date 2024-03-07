import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../../../theme/colors";
import { family } from "../../../../theme/fonts";

interface Props {
  name: string | null;
}
const Name = ({ name }: Props) => <Text style={styles.text}>{name}</Text>;

export default Name;

const styles = StyleSheet.create({
  text: {
    fontFamily: family.bold,
    color: colors.black,
    fontSize: 16,
  },
});
