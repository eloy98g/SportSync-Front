import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Components
import Divider from "../../../../../components/common/Divider";

// Theme
import colors from "../../../../../theme/colors";
import { family } from "../../../../../theme/fonts";

interface Props {
  title: string;
  subtitle: string;
  size?: number;
}

const DetailItem = ({ title, subtitle, size = 24 }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Divider height={4} />
      <Text style={[styles.title, { fontSize: size }]}>{title}</Text>
    </View>
  );
};

export default DetailItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontFamily: family.normal,
    color: colors.secondary,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: family.normal,
    color: colors.grey,
  },
});
