import React from "react";
import { StyleSheet, View } from "react-native";

interface Props {
  children?: React.ReactNode;
}

const SectionContainer = ({ children }: Props) => (
  <View style={styles.container}>{children}</View>
);

export default SectionContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
