import React from "react";
import { StyleSheet, View } from "react-native";

const Divider = ({ height = 1, width = 1, color = "transparent", ...rest }) => {
  return (
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
};

export default Divider;
