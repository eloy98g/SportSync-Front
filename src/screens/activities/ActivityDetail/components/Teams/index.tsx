import React from "react";
import { StyleSheet, View } from "react-native";

// Components
import Card from "../../../../../components/common/Card";
import TextLineDivider from "./TextDivider";
import Team from "./Team";

// Types
import Activity from "../../../../../store/types/Activity";

interface Props {
  activity: Activity;
}

const Teams = ({ activity }: Props) => {
  const { teams, playersPerTeam, status } = activity;
  const numTeams = teams.length;
  const firstTeam = numTeams > 0 ? teams[0] : null;
  const secondTeam = numTeams > 1 ? teams[1] : null;

  return (
    <Card title="Jugadores">
      <View style={styles.content}>
        {firstTeam && (
          <Team
            data={firstTeam}
            side="left"
            teamSize={playersPerTeam}
            status={status}
            activityData={activity}
          />
        )}
        {secondTeam && <TextLineDivider />}
        {secondTeam && (
          <Team
            data={secondTeam}
            side="right"
            teamSize={playersPerTeam}
            status={status}
            activityData={activity}
          />
        )}
      </View>
    </Card>
  );
};

export default Teams;

const styles = StyleSheet.create({
  content: {
    width: "100%",
    flexDirection: "row",
    paddingTop: 8,
  },
  divider: {
    borderColor: "red",
    width: 1,
    borderWidth: 1,
  },
});
