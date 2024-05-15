import React from "react";
import { StyleProp } from "@tamagui/core";
import { Text, TouchableOpacity, StyleSheet, TextStyle, ActivityIndicator } from "react-native";

// Components
import Divider from "../Divider";
import Loading from "../../Status/Loading";
import colors from "../../../theme/colors";

interface Props {
  onPress: (T: any) => void;
  text?: string;
  icon?: React.ReactNode;
  textStyle?: StyleProp<TextStyle>;
  distance?: number;
  borderStyle?: {
    color: string;
    radius: number;
  };
  padding?: boolean;
  loading?: boolean;
  loadingColor?:string
}

const IconButton = ({
  textStyle,
  icon,
  text,
  loading = false,
  loadingColor = colors.primary,
  onPress,
  distance = 20,
  borderStyle,
  padding = false,
}: Props) => {
  const containerStyle = [
    styles.row,
    borderStyle && {
      borderRadius: borderStyle.radius,
      borderColor: borderStyle.color,
      borderWidth: 1,
    },
    padding && { paddingVertical: 4, paddingHorizontal: 10 },
  ];
  return (
    <TouchableOpacity onPress={onPress} style={containerStyle}>
      {loading ? (
        <ActivityIndicator size={14} color={loadingColor} />
      ) : (
        <>
          {icon}
          {text && (
            <>
              <Divider width={distance} />
              <Text style={textStyle}>{text}</Text>
            </>
          )}
        </>
      )}
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
});
