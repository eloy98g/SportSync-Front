import React from "react";
import { TextInput as Input, StyleSheet } from "react-native";

// Theme
import colors from "../../../theme/colors";
import { family } from "../../../theme/fonts";

const TextInput = ({
  onChange,
  value,
  placeholder = "",
  error = false,
  secure = false,
}: any) => {
  const borderColor = error ? colors.red : colors.grey;
  return (
    <Input
      style={[styles.input, { borderColor }]}
      onChangeText={onChange}
      value={value}
      placeholder={placeholder}
      placeholderTextColor={colors.grey}
      secureTextEntry={secure}
    />
  );
};

export default TextInput;

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 46,
    borderWidth: 1,
    padding: 10,
    backgroundColor: colors.white,
    borderRadius: 10,
    fontFamily: family.normal,
    color: colors.black,
    fontSize: 18,
    textAlign: "left",
  },
});
