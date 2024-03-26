import React from "react";
import { DimensionValue, View } from "react-native";

interface Props {
  height?: DimensionValue;
  width?: DimensionValue;
  color?: string;
}

const Divider = ({
  height = 1,
  width = 1,
  color = "transparent",
  ...rest
}: Props) => (
  <View
    style={{
      height: height,
      width: width,
      borderBottomWidth: color ? 1 : 0,
      borderColor: color,
      ...rest,
    }}
  />
);

export default Divider;
