import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { ArrowRight } from "lucide-react-native";

// Components
import Divider from "../../../../../components/common/Divider";

// Theme
import colors from "../../../../../theme/colors";
import { family } from "../../../../../theme/fonts";

interface Props {
  icon?: React.ReactNode;
  title: string;
  onPress: () => void;
}

// TODO: turn this component into a common button
const TouchableInfo = ({ icon, title, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon}
      {icon && <Divider width={12} />}
      <View style={styles.titleWrapper}>
        <Text style={styles.text}>{title}</Text>
      </View>
      <ArrowRight size={24} color={colors.black} />
    </TouchableOpacity>
  );
};

export default TouchableInfo;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderWidth: 1,
    borderColor: colors.lightenGrey,
    borderRadius: 8,
    flexDirection: "row",
    paddingHorizontal: 12,
    alignItems: "center",
    height: 50,
  },
  titleWrapper: {
    flex: 1,
  },
  text: {
    fontFamily: family.normal,
    color: colors.black,
    fontSize: 14,
  },
});
