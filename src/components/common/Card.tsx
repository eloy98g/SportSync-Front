import React from "react";
import { StyleSheet, View, Text } from "react-native";

// Theme
import colors from "../../theme/colors";
import { family } from "../../theme/fonts";
import Divider from "./Divider";

interface Props {
  children: React.ReactNode;
  title?: string;
  border?: boolean;
  titlePadding?: number;
}

const Card = ({ children, title, border = true, titlePadding = 6 }: Props) => (
  <View
    style={[
      styles.container,
      border && { borderWidth: 1, borderColor: colors.lightenGrey },
    ]}
  >
    {title && <Text style={styles.title}>{title}</Text>}
    {titlePadding && <Divider height={6} />}
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
