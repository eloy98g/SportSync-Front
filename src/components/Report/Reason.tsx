import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

// Components
import Divider from "../common/Divider";

// Theme
import colors from "../../theme/colors";
import { family } from "../../theme/fonts";

interface Props {
  title: string;
  subtitle?: string;
  onPress: () => void;
}

const Reason = ({ title, subtitle, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      {subtitle && (
        <>
          <Divider height={4} />
          <Text style={styles.subtitle}>{subtitle}</Text>
        </>
      )}
    </TouchableOpacity>
  );
};

export default Reason;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  title: {
    fontFamily: family.bold,
    color: colors.black,
    fontSize: 14,
  },
  subtitle: {
    fontFamily: family.normal,
    color: colors.black,
    fontSize: 14,
  },
});
