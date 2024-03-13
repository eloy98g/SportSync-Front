import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Theme
import colors from "../../../../../../../theme/colors";
import Actions from "./Actions";
import Score from "./Score";
import Teams from "./Teams";

// Todo: change any to proper type
interface Props {
  data: any;
}

const RESULT_COLORS = {
  victory: colors.secondary,
  defeat: colors.red,
  tie: colors.grey,
  // Puedes agregar más casos según sea necesario
};

const Activity = ({ data }: Props) => {
  const { result, teams } = data;
  const borderColor = RESULT_COLORS[result.result];
  return (
    <View style={[styles.container, { borderLeftColor: borderColor }]}>
      <View style={styles.content}>
        <Teams teams={teams} />
        <Score result={result} />
        <Actions />
      </View>
    </View>
  );
};

export default Activity;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 120,
    borderRadius: 8,
    borderWidth: 1,
    borderTopColor: colors.lightenGrey,
    borderBottomColor: colors.lightenGrey,
    borderRightColor: colors.lightenGrey,
    borderLeftWidth: 8,
  },
  content: {
    width: "100%",
    height: "100%",
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: "row",
  },
});
