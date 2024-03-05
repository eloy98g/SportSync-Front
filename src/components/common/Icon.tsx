import React from "react";
import {
  Home,
  Target,
  UserRound,
  Lock,
  Users,
  Medal,
  Ban,
  Smile,
} from "lucide-react-native";
import { ColorValue } from "react-native/types";

interface Props {
  icon: any;
  color?: ColorValue;
  size?: number;
}

const Icon = ({ icon, color, size = 30 }: Props): React.JSX.Element => {
  switch (icon) {
    case "home":
      return <Home size={size} color={color} />;
    case "search":
      return <Target size={size} color={color} />;
    case "profile":
      return <UserRound size={size} color={color} />;
    case "private":
      return <Lock size={size} color={color} />;
    case "public":
      return <Users size={size} color={color} />;
    case "competitive":
      return <Medal size={size} color={color} />;
    case "normal":
      return <Smile size={size} color={color} />;
    default:
      return <Ban size={size} color={color} />;
  }
};

export default Icon;
