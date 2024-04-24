import React from "react";
import { StyleProp, Text, TextStyle, TouchableOpacity } from "react-native";

interface Props {
  textStyle?: StyleProp<TextStyle>;
  onPress: ()=>void;
  text: string;
}

const TouchableText = ({ textStyle, onPress, text }: Props) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={textStyle}>{text}</Text>
  </TouchableOpacity>
);

export default TouchableText;
