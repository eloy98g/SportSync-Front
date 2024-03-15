import { Minus } from "lucide-react-native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Action from "../../../../../../components/activities/Action";
import FinalScoreText from "../../../../../../components/activities/FinalScoreText";
import Tag from "../../../../../../components/activities/Tag";
import Team from "../../../../../../components/activities/Team";
import Divider from "../../../../../../components/common/Divider";
import colors from "../../../../../../theme/colors";
import RESULT_COLORS from "../../../../../../utils/activity/resultColors";
import unixToDate from "../../../../../../utils/date/unixToDate";

// TODO: change any's
const Activity = ({ data }: any) => {
  const { result, teams, endDate } = data;
  const borderColor = RESULT_COLORS[result.result];

  const userTeam = teams.find((team: any) => team.userTeam);
  const otherTeam = teams.find((team: any) => !team.userTeam);

  const userScore = result.finalScores[0].scores.find(
    (team: any) => team.team === userTeam.name
  );
  const otherScore = result.finalScores[0].scores.find(
    (team: any) => team.team !== userTeam.name
  );
  
  const winner = result.finalScores[0].winner;

  const moreInfoHandler = () => {};

  return (
    <View style={[styles.container, { borderColor }]}>
      <View style={styles.content}>
        <View style={styles.teamWrapper}>
          <Team image={userTeam.player.image} size={userTeam.numPlayers} />
        </View>
        <View style={styles.scoreWrapper}>
          <FinalScoreText
            points={userScore.points}
            team={userScore.team}
            winner={winner}
          />
          <Divider width={20} />
          <Minus color={colors.grey} />
          <Divider width={20} />
          <FinalScoreText
            points={otherScore.points}
            team={otherScore.team}
            winner={winner}
          />
        </View>
        {otherTeam && (
          <View style={styles.teamWrapper}>
            <Team image={otherTeam.player.image} size={otherTeam.numPlayers} />
          </View>
        )}
        <Divider width={12} />
        <View style={styles.actions}>
          <Tag size="small" text={unixToDate(endDate)} />
          <Divider height={4}/>
          <Action size="small" text={"ver más"} onPress={moreInfoHandler} />
        </View>
      </View>
    </View>
  );
};

export default Activity;

const styles = StyleSheet.create({
  container: {
    borderLeftWidth: 5,
    width: "100%",
  },
  content: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  teamWrapper: {
    width: 50,
  },
  scoreWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingHorizontal: 8,
  },
  actions: {
    width: 80,
    borderLeftWidth: 1,
    borderColor: colors.lightenGrey,
    height: "100%",
    paddingHorizontal: 12
  },
});
