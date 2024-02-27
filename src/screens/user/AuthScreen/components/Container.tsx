import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

// Theme
import { PHONE } from "../../../../theme/breakPoints";
import colors from "../../../../theme/colors";

const Container = ({ children }: any) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.content}
        source={require("../../../../assets/images/background1.png")}
      >
        <View style={styles.opacity} />
        <View style={styles.children}>{children}</View>
      </ImageBackground>
    </View>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    maxWidth: PHONE,
    zIndex: 1,
  },
  opacity: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    zIndex: 2,
    backgroundColor: colors.primary,
    opacity: 0.2,
  },
  children: {
    width: "100%",
    height: "100%",
    zIndex: 3,
  },
});
