import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Components
import Divider from "../common/Divider";

// Theme
import colors from "../../theme/colors";
import { family } from "../../theme/fonts";

interface Props {
  title: string;
  text: string;
  icon?: React.ReactNode;
}
const InfoItem = ({ title, text, icon }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {icon}
        {icon && <Divider width={8} />}
        <Text style={styles.title}>{title}</Text>
      </View>
      <Divider height={8} />
      <View style={styles.row}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

export default InfoItem;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  row: {
    width: "100%",
    flexDirection: "row",
  },
  title: {
    fontFamily: family.bold,
    color: colors.black,
    fontSize: 14,
  },
  text: {
    fontFamily: family.normal,
    color: colors.black,
    fontSize: 14,
  },
});
