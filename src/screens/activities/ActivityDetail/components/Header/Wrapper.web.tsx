import React from "react";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

// Theme
import colors from "../../../../../theme/colors";
import { PHONE } from "../../../../../theme/breakPoints";

interface Props {
  children: React.JSX.Element | React.JSX.Element[];
}

const Wrapper = ({ children }: Props) => {
  return (
    <LinearGradient
      colors={[colors.primary, colors.secondary]}
      style={[styles.container]}
      start={{ x: 0, y: 0 }}
      locations={[0, 1]}
    >
      <View style={styles.content}>{children}</View>
    </LinearGradient>
  );
};

export default Wrapper;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "absolute",
    top: 0,
    shadowColor: "rgba(0,0,0,0,4)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    backgroundColor: "white",
    height: 150,
    alignItems: "center",
  },
  content: {
    width: "100%",
    maxWidth: PHONE,
    paddingHorizontal: 12,
    paddingTop: 10,
  },
});
