import React from "react";
import { StyleSheet, View } from "react-native";

// Components
import Team from "./Team";

// Types
import TeamT from "../../store/types/activity/Team";

interface Props {
  teams: TeamT[];
}

const Teams = ({ teams }: Props) => {
  return (
    <View style={styles.teamWrapper}>
      {teams.map((team: TeamT) => (
        <Team
          key={team.name}
          image={team.players[0]?.image}
          size={team.players.length}
        />
      ))}
    </View>
  );
};

export default Teams;

const styles = StyleSheet.create({
  teamWrapper: {
    width: 60,
    height: "100%",
    justifyContent: "space-around",
  },
});
