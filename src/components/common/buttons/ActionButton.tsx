import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

// Theme
import colors from "../../../theme/colors";

interface Props {
  size?: number;
  icon: React.JSX.Element;
  color?: string;
  onPress: () => void;
  active?: boolean;
}
const ActionButton = ({ size, icon, color, onPress, active }: Props) => {
  const style = [
    styles.container,
    { width: size, height: size, borderRadius: size, backgroundColor: color },
    !active && { opacity: 0.5 },
  ];

  const clickHandler = () => {
    if (active) {
      onPress();
    }
  };

  return (
    <TouchableOpacity style={style} onPress={clickHandler}>
      {icon}
    </TouchableOpacity>
  );
};

ActionButton.defaultProps = {
  size: 30,
  color: colors.primary,
  active: true,
};

export default ActionButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
