import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../../../theme/colors";
import { family } from "../../../../theme/fonts";

interface Props {
  description: string | null;
}
const Description = ({ description }: Props) => (
  <View style={styles.container}>
    <Text style={styles.text}>{description}</Text>
  </View>
);

export default Description;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,

  },
  text: {
    fontFamily: family.light,
    color: colors.black,
    fontSize: 16,
    textAlign:"center"
  },
});
