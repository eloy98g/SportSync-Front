import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Components
import Divider from "../../../../components/common/Divider";

// Theme
import colors from "../../../../theme/colors";
import { family } from "../../../../theme/fonts";

interface Props {
  title: string | number;
  subtitle: string;
  color: string;
}

const ResumeItem = ({ title, subtitle, color }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: color }]}>{title}</Text>
      <Divider height={4} />
      <Text style={[styles.subtitle, { color: color }]}>{subtitle}</Text>
    </View>
  );
};

export default ResumeItem;

const styles = StyleSheet.create({
  container: {
    height: 75,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    fontFamily: family.normal,
    color: colors.secondary,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: family.normal,
    color: colors.secondary,
  },
});
