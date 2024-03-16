import React from "react";
import {
  Text,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

// Theme
import colors from "../../../theme/colors";
import { family } from "../../../theme/fonts";

const MainButton = ({
  onPress = () => {},
  title = "",
  active = true,
  color = colors.primary,
  textColor = colors.white,
  borderWidth = 1,
  borderColor = colors.primary,
  loading = false,
  height = 46,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.confirmButton,
        { backgroundColor: color, borderWidth, borderColor, height },
      ]}
      onPress={active ? onPress : () => {}}
      activeOpacity={active ? 0.3 : 1}
    >
      {loading ? (
        <ActivityIndicator size="small" color={textColor} />
      ) : (
        <Text style={[styles.text, { color: textColor }]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default MainButton;

const styles = StyleSheet.create({
  confirmButton: {
    flex: 1,
    height: 46,
    maxHeight: 46,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  text: {
    fontFamily: family.normal,
    fontSize: 16,
    textAlign: "center",
  },
});
