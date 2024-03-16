import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { MapPin } from "lucide-react-native";

// Components
import Divider from "../../../../../components/common/Divider";

// Theme
import colors from "../../../../../theme/colors";
import { family } from "../../../../../theme/fonts";

const Location = ({ place }: any) => {
  const { address } = place;

  return (
    <TouchableOpacity style={styles.container}>
      <MapPin color={colors.grey} size={18} />
      <Divider width={8} />
      <Text style={styles.text}>{address}</Text>
    </TouchableOpacity>
  );
};

export default Location;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  text: {
    fontFamily: family.normal,
    fontSize: 14,
    color: colors.black,
    textAlign: "center",
  },
});
