import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Theme
import colors from "../../theme/colors";
import { family } from "../../theme/fonts";

// Types
import Score from "../../store/types/activity/Score";
import Team from "../../store/types/activity/Team";

interface Props {
  scores: Score[];
  teams: Team[];
}

const PartialScore = ({ scores, teams }: Props) => {
  return (
    <View style={styles.container}>
      {teams.map((team) => {
        const teamScores = scores.filter((score) => score.team === team.name);
        return (
          <View style={styles.teamRow} key={team.name}>
            {teamScores.map((score) => {
              const winner =
                scores.filter(
                  (item) =>
                    item.position === score.position &&
                    item.points < score.points
                ).length > 0;
              return (
                <View style={styles.slotWrapper} key={score.gid}>
                  <Text
                    style={[
                      styles.baseScore,
                      winner ? styles.winnerScore : styles.loserScore,
                    ]}
                  >
                    {score.points}
                  </Text>
                </View>
              );
            })}
          </View>
        );
      })}
    </View>
  );
};

export default PartialScore;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    height: "100%",
    flex: 1,
    justifyContent: "space-around",
  },
  teamRow: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  slotWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  baseScore: {
    fontFamily: family.light,
    fontSize: 16,
    color: colors.black,
  },
  loserScore: {
    fontFamily: family.light,
    fontSize: 24,
    color: colors.grey,
  },
  winnerScore: {
    fontFamily: family.normal,
    fontSize: 24,
    color: colors.secondary,
  },
});
