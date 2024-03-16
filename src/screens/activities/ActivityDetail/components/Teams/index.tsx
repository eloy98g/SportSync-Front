import React from "react";
import { StyleSheet, View } from "react-native";

// Components
import Card from "../../../../../components/common/Card";
import TextLineDivider from "./TextDivider";
import Team from "./Team";

interface Props {
  data: any;
  teamSize: number;
  teams: number;
  status: any; // TODO: change any's to proper clases
}

const Teams = ({ data = [], teamSize, teams, status }: Props) => {
  const firstTeam = teams > 0 ? data[0] : null;
  const secondTeam = teams > 1 ? data[1] : null;

  return (
    <Card title="Jugadores">
      <View style={styles.content}>
        {firstTeam && (
          <Team
            data={firstTeam}
            side="left"
            teamSize={teamSize}
            status={status}
          />
        )}
        {secondTeam && <TextLineDivider />}
        {secondTeam && (
          <Team
            data={secondTeam}
            side="right"
            teamSize={teamSize}
            status={status}
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
    paddingTop:8
  },
  divider: {
    borderColor: "red",
    width: 1,
    borderWidth: 1,
  },
});
