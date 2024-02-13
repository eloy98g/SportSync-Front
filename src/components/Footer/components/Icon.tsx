import React from "react";
import { Octicons, Feather } from "@expo/vector-icons";

// Constants
import colors from "../../../theme/colors";

const Icon = ({ icon, active }: any): any => {
  const color = active ? colors.primary : colors.black;

  switch (icon) {
    case "home":
      return <Octicons name="home" size={30} color={color} />;
    case "search":
      return <Feather name="search" size={30} color={color} />;
    case "profile":
      return <Octicons name="person" size={30} color={color} />;
  }
};

export default Icon;
