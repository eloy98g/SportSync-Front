import React from "react";
import { Octicons, Feather } from "@expo/vector-icons";

// Constants
import colors from "../../../theme/colors";

const Icon = ({ index, active }: any): any => {
  const color = active ? colors.primary : colors.black;

  switch (index) {
    case 0:
      return <Octicons name="home" size={30} color={color} />;
    case 1:
      return <Feather name="shopping-bag" size={30} color={color} />;
    case 2:
      return <Octicons name="person" size={30} color={color} />;
  }
};

export default Icon;
