import React from "react";
import { StyleSheet, View } from "react-native";

// Theme
import colors from "../../theme/colors";
import Actions from "./Actions";
import Score from "./Score";
import Teams from "./Teams";

// Types
import { ActivityType } from "../../store/types/Activity";

// Utils
import RESULT_COLORS from "../../utils/activity/resultColors";

interface Result {
  result: "victory" | "defeat" | "tie";
}

// Todo: change any to proper type
interface Props {
  data: {
    result: Result;
    teams: any;
    type: ActivityType;
    endDate: number;
    gid: number;
  };
}

const Activity = ({ data }: Props) => {
  const { result, teams, endDate, type, gid } = data;
  const borderColor = RESULT_COLORS[result.result];
  return (
    <View style={[styles.container, { borderLeftColor: borderColor }]}>
      <View style={styles.content}>
        <Teams teams={teams} />
        <Score result={result} />
        <Actions endDate={endDate} type={type} gid={gid} />
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
