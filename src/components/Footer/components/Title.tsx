import React from "react";
import { Text } from "react-native";

// Constants
import { family } from "../../../theme/fonts";
import colors from "../../../theme/colors";

const Title = ({ title, active }: any): any => {
  const color = active ? colors.primary : colors.black;
  const fontFamily = active ? family.bold : family.normal;

  const styles = { color, fontFamily, fontSize: 10 };
  return <Text style={styles}>{title}</Text>;
};

export default Title;
