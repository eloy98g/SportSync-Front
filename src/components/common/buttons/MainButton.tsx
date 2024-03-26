import React from "react";
import {
  Text,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

// Theme
import colors from "../../../theme/colors";
import { family } from "../../../theme/fonts";

interface Props {
  onPress: () => void;
  title: string;
  active?: boolean;
  color?: string;
  textColor?: string;
  borderWidth?: number;
  borderColor?: string;
  loading?: boolean;
  fontSize?: number;
  height?: number;
}

const MainButton = ({ onPress, title, active, loading, ...props }: Props) => {
  const { color, textColor, borderWidth, borderColor, fontSize, height } =
    props;
  return (
    <TouchableOpacity
      style={[
        styles.confirmButton,
        { backgroundColor: color, borderWidth, borderColor, height },
      ]}
      onPress={active ? onPress : () => {}}
      activeOpacity={active ? 0.3 : 1}
      {...props}
    >
      {loading ? (
        <ActivityIndicator size="small" color={textColor} />
      ) : (
        <Text style={[styles.text, { color: textColor, fontSize }]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

MainButton.defaultProps = {
  active: true,
  color: colors.primary,
  textColor: colors.white,
  borderWidth: 1,
  borderColor: colors.primary,
  loading: false,
  fontSize: 16,
  height: 46,
};

export default MainButton;

const styles = StyleSheet.create({
  confirmButton: {
    flex: 1,
    maxHeight: 46,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  text: {
    fontFamily: family.normal,
    textAlign: "center",
  },
});
