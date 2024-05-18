import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

// Components
import Divider from "../common/Divider";

// Theme
import colors from "../../theme/colors";
import { family } from "../../theme/fonts";
import { ReportReason } from "./ReportSheet";

interface Props {
  data: ReportReason;
  onPress: () => void;
}

const Reason = ({ data, onPress }: Props) => {
  const { detail } = data;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{detail}</Text>
      {/* {subtitle && (
        <>
          <Divider height={4} />
          <Text style={styles.subtitle}>{subtitle}</Text>
        </>
      )} */}
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
