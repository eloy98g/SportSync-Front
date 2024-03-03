import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MasonryList from "@react-native-seoul/masonry-list";

// Theme
import colors from "../../../theme/colors";
import { PHONE } from "../../../theme/breakPoints";
import { family } from "../../../theme/fonts";
import ActionButton from "./ActionButton";

interface Props {
  title: string;
  data?: any;
}

const HomeSection = ({ title, data }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <MasonryList
        data={data}
        numColumns={2}
        keyExtractor={(item: any) => item.id}
        renderItem={(item: any) => <ActionButton {...item.item} />}
        style={{ alignItems: "flex-end" }}
      />
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
    fontFamily: family.semibold,
    fontSize: 16,
    color: colors.grey,
  },
  flatlist: {
    paddingHorizontal: 16,
    paddingTop: 16,
    gap: 20,
  },
});
