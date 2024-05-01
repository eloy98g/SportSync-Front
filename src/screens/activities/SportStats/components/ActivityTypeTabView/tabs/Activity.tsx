import React from "react";
import { Minus } from "lucide-react-native";
import { StyleSheet, TouchableOpacity, View } from "react-native";

// Components
import FinalScoreText from "../../../../../../components/activities/FinalScoreText";
import Action from "../../../../../../components/activities/Action";
import Divider from "../../../../../../components/common/Divider";
import Team from "../../../../../../components/activities/Team";
import Tag from "../../../../../../components/activities/Tag";

// Hooks
import { useAppSelector } from "../../../../../../hooks";
import useNavigate from "../../../../../../hooks/useNavigate";

// Theme
import colors from "../../../../../../theme/colors";

// Types
import ActivityT from "../../../../../../store/types/activity/Activity";
import Slot from "../../../../../../store/types/activity/Slot";
import TeamT from "../../../../../../store/types/activity/Team";

// Utils
import RESULT_COLORS from "../../../../../../utils/activity/resultColors";
import unixToDate from "../../../../../../utils/date/unixToDate";
import getWinner from "../../../../../../utils/score/getWinner";
import getUserTeam from "../../../../../../utils/activity/getUserTeam";
import getSimpleScore from "../../../methods/getSimpleScore";

interface Props {
  data: ActivityT;
}

const Activity = ({ data }: Props) => {
  const { result, teams, startDate, gid } = data;
  const userGid = useAppSelector((state) => state.user.user.gid);
  const { navigateTo } = useNavigate();

  const winner = getWinner(data.result);
  const userTeam = getUserTeam(userGid, teams);

  const resultString =
    winner === null ? "tie" : winner === userTeam ? "victory" : "defeat";
  const borderColor = RESULT_COLORS[resultString];

  const userTeamData = teams.find((team: TeamT) => team.name === userTeam);

  const otherTeam = teams.find((team: TeamT) => team.name !== userTeam);

  const { userScore, otherScore } = getSimpleScore(result, userTeam);

  const moreInfoHandler = () => {
    navigateTo("ActivityDetail", { gid });
  };

  return (
    <TouchableOpacity
      onPress={moreInfoHandler}
      style={[styles.container, { borderColor }]}
    >
      <View style={styles.content}>
        <View style={styles.teamWrapper}>
          <Team
            image={userTeamData?.players[0].image}
            size={userTeamData?.players.length}
          />
        </View>
        <View style={styles.scoreWrapper}>
          <FinalScoreText
            points={userScore}
            team={userTeam}
            winner={winner}
          />
          <Divider width={20} />
          <Minus color={colors.grey} />
          <Divider width={20} />
          <FinalScoreText
            points={otherScore}
            team={otherTeam?.name}
            winner={winner}
          />
        </View>
        {otherTeam && (
          <View style={styles.teamWrapper}>
            <Team
              image={otherTeam?.players[0].image}
              size={otherTeam?.players.length}
            />
          </View>
        )}
        <Divider width={12} />
        <View style={styles.actions}>
          <Tag size="small" text={unixToDate(startDate)} />
          <Divider height={4} />
          <Action size="small" text={"ver más"} onPress={moreInfoHandler} />
        </View>
      </View>
    </TouchableOpacity>
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
    paddingLeft: 16,
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
    paddingLeft: 12,
  },
});
