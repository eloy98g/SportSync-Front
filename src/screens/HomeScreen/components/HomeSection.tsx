import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MasonryList from "@react-native-seoul/masonry-list";

// Components
import Divider from "../../../components/common/Divider";
import ActionButton from "./ActionButton";

// Theme
import colors from "../../../theme/colors";
import { PHONE } from "../../../theme/breakPoints";
import { family } from "../../../theme/fonts";

interface Props {
  title: string;
  children: any;
}

const HomeSection = ({ title, children }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Divider height={10} />
      <View style={{ flex: 1, }}>{children}</View>
    </View>
  );
};

export default HomeSection;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    maxWidth: PHONE,
    paddingHorizontal: 12,
  },
  title: {
    fontFamily: family.light,
    fontSize: 14,
    color: colors.grey,
  },
});
