import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

// Theme
import colors from "../../../theme/colors";
import { family } from "../../../theme/fonts";

interface Props {
  selected: boolean;
  onPress: () => void;
  text: string;
}

const Tag = ({ selected, onPress, text }: Props) => {
  const containerStyle = [
    styles.container,
    selected && styles.containerSelected,
  ];
  const textStyle = [styles.text, selected && styles.textSelected];
  
  return (
    <TouchableOpacity style={containerStyle} onPress={onPress}>
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Tag;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 30,
    backgroundColor: colors.white,
    borderColor: colors.primary,
    borderWidth: 1,
  },
  containerSelected: {
    backgroundColor: colors.primary,
  },
  textSelected: {
    color: colors.white,
  },
  text: {
    fontSize: 14,
    fontFamily: family.normal,
    color: colors.primary,
  },
});
