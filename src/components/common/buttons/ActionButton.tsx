import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { icons } from "lucide-react-native";

// Theme
import colors from "../../../theme/colors";

interface Props {
  size?: number;
  icon: React.JSX.Element;
  color?: string;
  onPress: () => void;
}
const ActionButton = ({ size, icon, color, onPress }: Props) => {
  const style = [
    styles.container,
    { width: size, height: size, borderRadius: size, backgroundColor: color },
  ];
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      {icon}
    </TouchableOpacity>
  );
};

ActionButton.defaultProps = {
  size: 30,
  color: colors.primary,
};

export default ActionButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
