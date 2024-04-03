import React from "react";
import { StyleSheet } from "react-native";
import { TextArea as RNTextArea } from "tamagui";

// Theme
import colors from "../../../theme/colors";
import { family } from "../../../theme/fonts";

interface Props {
  placeholder?: string;
  value: string;
  onChange: (T: any) => void;
  error?: boolean;
  height?: number;
}

const TextArea = ({ placeholder, value, onChange, error, height }: Props) => {
  const borderColor = error ? colors.red : colors.grey;
  return (
    <RNTextArea
      style={[styles.container, { borderColor }]}
      placeholder={placeholder}
      value={value}
      onChangeText={onChange}
      placeholderTextColor={colors.grey}
      height={height}
    />
  );
};

TextArea.defaultProps = {
  error: false,
  height: 92,
};

export default TextArea;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 10,
    textAlignVertical: 'top',
    fontFamily: family.normal,
    borderWidth: 1,
    fontSize: 18,
    color: colors.black,
    backgroundColor: colors.white,
  },
});
