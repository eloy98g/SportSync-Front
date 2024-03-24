import React from "react";
import { StyleSheet, View, Text } from "react-native";

// Theme
import colors from "../../theme/colors";
import { family } from "../../theme/fonts";

interface Props {
  children: any;
  title?: string;
  border?: boolean;
}
const Card = ({ children, title, border = true }: Props) => (
  <View
    style={[
      styles.container,
      border && { borderWidth: 1, borderColor: colors.lightenGrey },
    ]}
  >
    {title && <Text style={styles.title}>{title}</Text>}
    {children}
  </View>
);

export default Card;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 12,
    borderRadius: 8,
  },
  title: {
    fontFamily: family.light,
    fontSize: 14,
    color: colors.grey,
  },
});
