import React from "react";
import { TextInput as Input, StyleSheet } from "react-native";
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
    flex: 1,
    maxHeight: 46,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    fontFamily: family.normal,
    fontSize: 18,
    textAlign: "left",
  },
});
