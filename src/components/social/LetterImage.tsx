import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { family } from "../../theme/fonts";
import generateContrastColors from "../../utils/colors/generateContrastColors";

interface Props {
  name: string;
}
const LetterImage = ({ name }: Props) => {
  const letter = name?.length > 0 ? name.charAt(0).toUpperCase() : "C";
  const [color1, color2] = generateContrastColors();
  return (
    <View style={[styles.image, { backgroundColor: color1 }]}>
      <Text style={[styles.letter, { color: color2 }]}>{letter}</Text>
    </View>
  );
};

export default LetterImage;

const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  letter: {
    fontSize: 24,
    fontFamily: family.bold,
  },
});
