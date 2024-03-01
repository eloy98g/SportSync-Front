import React from "react";
import { Home, Target, UserRound } from "lucide-react-native";

// Constants
import colors from "../../../theme/colors";

const Icon = ({ icon, active }: any): any => {
  const color = active ? colors.primary : colors.black;

  switch (icon) {
    case "home":
      return <Home size={30} color={color} />;
    case "search":
      return <Target size={30} color={color} />;
    case "profile":
      return <UserRound size={30} color={color} />;
  }
};

export default Icon;
