import React from "react";
import { StyleSheet, View } from "react-native";

// Theme
import colors from "../../theme/colors";

const Card = ({ children }: any) => (
  <View style={styles.container}>{children}</View>
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
});
