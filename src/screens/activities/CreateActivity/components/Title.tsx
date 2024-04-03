import React from "react";
import { StyleSheet, Text } from "react-native";
import { family } from "../../../../theme/fonts";
import colors from "../../../../theme/colors";

interface Props {
  title: string;
}

const Title = ({ title }: Props) => <Text style={styles.title}>{title}</Text>;

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: family.normal,
    fontSize: 28,
    color: colors.black,
  },
});
