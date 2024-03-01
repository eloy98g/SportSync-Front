import React from "react";
import { Text, TouchableOpacity } from "react-native";

interface Props {
  textStyle?: any;
  onPress: any;
  text: string;
}

const TouchableText = ({ textStyle, onPress, text }: Props) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={textStyle}>{text}</Text>
  </TouchableOpacity>
);

export default TouchableText;
