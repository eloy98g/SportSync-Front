import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

// Components
import Divider from "../../../../components/common/Divider";

// Theme
import colors from "../../../../theme/colors";
import { family } from "../../../../theme/fonts";

interface Props {
  selected: boolean;
  onPress: () => void;
  title: string;
  description: string;
  height?: number;
}

const TypeSelector = ({
  selected,
  onPress,
  title,
  height,
  description,
}: Props) => {
  const containerStyle = [
    styles.container,
    selected && { borderColor: colors.primary },
    { height },
  ];
  return (
    <TouchableOpacity style={containerStyle} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      <Divider height={8} />
      <Text style={styles.description}>{description}</Text>
    </TouchableOpacity>
  );
};

export default TypeSelector;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.lightenGrey,
  },
  title: {
    fontFamily: family.bold,
    color: colors.black,
    fontSize: 14,
  },
  description: {
    fontFamily: family.normal,
    color: colors.black,
    fontSize: 14,
    borderWidth: 1,
    borderColor: "transparent",
  },
});
