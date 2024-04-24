import React from "react";
import { DimensionValue, View } from "react-native";

interface Props {
  height?: DimensionValue;
  width?: DimensionValue;
  color?: string;
}

const Divider = ({ height, width, color, ...rest }: Props) => (
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

Divider.defaultProps = {
  height: 1,
  width: 1,
  color: "transparent",
};

export default Divider;
