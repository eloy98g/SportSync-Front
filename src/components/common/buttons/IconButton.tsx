import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

// Components
import Divider from "../Divider";

interface Props {
  onPress: any;
  text: string;
  icon: any;
  textStyle?: any;
  distance?: number;
}

const IconButton = ({
  textStyle,
  icon,
  text,
  onPress,
  distance = 20,
}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.row}>
      {icon}
      <Divider width={distance} />
      <Text style={textStyle}>{text}</Text>
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
