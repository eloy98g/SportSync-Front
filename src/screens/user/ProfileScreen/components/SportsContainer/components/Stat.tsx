import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Divider from "../../../../../../components/common/Divider";
import colors from "../../../../../../theme/colors";
import { family } from "../../../../../../theme/fonts";

interface Props {
  title: string;
  subtitle: string;
  size?: number;
}

const Stat = ({ title, subtitle, size = 24 }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { fontSize: size }]}>{title}</Text>
      <Divider height={4} />
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

export default Stat;

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 75,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.secondary,
  },
  title: {
    fontSize: 24,
    fontFamily: family.bold,
    color: colors.secondary,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: family.bold,
    color: colors.secondary,
  },
});
