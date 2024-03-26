import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

// Components
import colors from "../../../../theme/colors";
import { family } from "../../../../theme/fonts";

interface Props {
  label: string;
  selected: boolean;
  onPress: () => void;
}
const Distance = ({ label, onPress, selected }: Props) => {
  const containerStyle = [
    styles.container,
    selected && { backgroundColor: colors.primary },
  ];
  const textStyle = [styles.text, selected && { color: colors.white }];
  return (
    <TouchableOpacity style={containerStyle} onPress={onPress}>
      <Text style={textStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Distance;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  text: {
    fontFamily: family.normal,
    color: colors.primary,
    fontSize: 16,
    textAlign: "center",
  },
});
