import React from "react";
import { StyleSheet, Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

// Theme
import colors from "../../../../../theme/colors";
import { useWindowDimensions } from "react-native";

const Wrapper = () => {
  const width = useWindowDimensions().width;
  return (
    <LinearGradient
      colors={[colors.primary, colors.secondary]}
      style={[
        styles.container,
        {
          width: width - 120,
          borderRadius: 150,
          height: 245,
          top: -85,
          left: 50,
          transform: [{ scaleX: 3 }],
        },
      ]}
      start={{ x: 0, y: 0 }}
      locations={[0, 1]}
    />
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
    zIndex: 2,
  },
});
