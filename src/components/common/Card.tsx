import React from "react";
import { StyleSheet, View, Text } from "react-native";

// Theme
import colors from "../../theme/colors";
import { family } from "../../theme/fonts";

const Card = ({ children, title }: any) => (
  <View style={styles.container}>
    {title && <Text style={styles.title}>{title}</Text>}
    {children}
  </View>
);

export default Card;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 12,
    borderWidth: 1,
    borderColor: colors.lightenGrey,
    borderRadius: 8,
  },
  title: {
    fontFamily: family.light,
    fontSize: 14,
    color: colors.grey,
  },
});
