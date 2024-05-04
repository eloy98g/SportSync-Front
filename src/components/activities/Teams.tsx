import React from "react";
import { StyleSheet, View } from "react-native";

// Components
import Team from "./Team";

// Types
import TeamT from "../../store/types/activity/Team";
import PROFILE_IMAGE from "../../constants/PROFILE_IMAGE";

interface Props {
  teams: TeamT[];
}

const Teams = ({ teams }: Props) => {
  return (
    <View style={styles.teamWrapper}>
      {teams.map((team: TeamT) => (
        <Team
          key={team.name}
          image={team.players[0]?.image || PROFILE_IMAGE}
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
