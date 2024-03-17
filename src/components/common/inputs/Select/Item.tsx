import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

// Theme
import colors from "../../../../theme/colors";
import { family } from "../../../../theme/fonts";

interface Props {
  label: string;
  onPress: () => void;
}

const Item = ({ label, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.itemWrapper} onPress={onPress}>
      <Text style={styles.itemText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Item;

const styles = StyleSheet.create({
  itemText: {
    fontFamily: family.normal,
    color: colors.black,
    fontSize: 14,
    textAlign: "left",
  },
  itemWrapper: {
    width: "100%",
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: colors.white,
    borderColor: colors.grey,
  },
});
