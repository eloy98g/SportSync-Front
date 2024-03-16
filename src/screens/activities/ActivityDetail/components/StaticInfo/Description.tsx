import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Theme
import colors from "../../../../../theme/colors";
import { family } from "../../../../../theme/fonts";

interface Props {
  description: string;
}

const Description = ({ description }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{description}</Text>
    </View>
  );
};

export default Description;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 8,
  },
  text: {
    fontFamily: family.normal,
    fontSize: 14,
    color: colors.black,
    textAlign: "justify",
  },
});
