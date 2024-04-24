import React from "react";
import { StyleProp } from "@tamagui/core";
import { Text, TouchableOpacity, StyleSheet, TextStyle } from "react-native";

// Components
import Divider from "../Divider";

interface Props {
  onPress: (T:any) => void;
  text?: string;
  icon?: React.ReactNode;
  textStyle?: StyleProp<TextStyle>;
  distance?: number;
  borderStyle?: {
    color: string;
    radius: number;
  };
  padding?: boolean;
}

const IconButton = ({
  textStyle,
  icon,
  text,
  onPress,
  distance = 20,
  borderStyle,
  padding = false,
}: Props) => {
  const containerStyle = [
    styles.row,
    borderStyle && {
      borderRadius: borderStyle.radius,
      borderColor: borderStyle.color,
      borderWidth: 1,
    },
    padding && { paddingVertical: 4, paddingHorizontal: 10 },
  ];
  return (
    <TouchableOpacity onPress={onPress} style={containerStyle}>
      {icon}
      {text && (
        <>
          <Divider width={distance} />
          <Text style={textStyle}>{text}</Text>
        </>
      )}
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
});
