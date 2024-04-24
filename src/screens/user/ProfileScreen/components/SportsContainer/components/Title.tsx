import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Theme
import colors from "../../../../../../theme/colors";
import { family } from "../../../../../../theme/fonts";

interface Props {
  title: string;
}

const Title = ({ title }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: family.bold,
    fontSize: 16,
    color: colors.grey,
  },
  container: {
    width: "100%",
  },
});
