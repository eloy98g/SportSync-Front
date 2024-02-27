import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../../../theme/colors";
import { family } from "../../../../theme/fonts";

const Hero = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`Hacer deporte\nnunca fue tan\nfácil.`}</Text>
    </View>
  );
};

export default Hero;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 30,
    paddingTop: 40,
  },
  text: {
    fontFamily: family.bold,
    color: colors.white,
    fontSize: 40,
  },
});
