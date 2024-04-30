import React from "react";
import { StyleSheet, View } from "react-native";

// Components
import TeamNames from "../../../../../components/activities/TeamNames";
import Divider from "../../../../../components/common/Divider";
import Teams from "../../../../../components/activities/Teams";
import Card from "../../../../../components/common/Card";
import Score from "../../../../../components/activities/Score";

// Theme
import { family } from "../../../../../theme/fonts";
import colors from "../../../../../theme/colors";

// Types
import Team from "../../../../../store/types/activity/Team";
import ScoreT from "../../../../../store/types/activity/Score";

interface Props {
  teams: Team[];
  result: ScoreT[];
}

const Result = ({ teams, result }: Props) => {
  return (
    <Card title="Resultado">
      <View style={styles.content}>
        <TeamNames teams={teams} />
        <Divider width={12} />
        <Teams teams={teams} />
        <Score teams={teams} result={result} />
      </View>
    </Card>
  );
};

export default Result;

const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    height: 120,
  },
  title: {
    fontFamily: family.light,
    fontSize: 14,
    color: colors.grey,
  },
});
