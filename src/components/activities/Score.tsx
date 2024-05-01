import React from "react";
import { StyleSheet, View } from "react-native";

// Components
import PartialScore from "./PartialScore";

// Types
import ScoreT from "../../store/types/activity/Score";
import Team from "../../store/types/activity/Team";

interface Props {
  result: ScoreT[];
  teams: Team[];
}

const Score = ({ result, teams }: Props) => {
  return (
    <View style={styles.scoreWrapper}>
      <PartialScore teams={teams} scores={result} />
    </View>
  );
};

export default Score;

const styles = StyleSheet.create({
  scoreWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
