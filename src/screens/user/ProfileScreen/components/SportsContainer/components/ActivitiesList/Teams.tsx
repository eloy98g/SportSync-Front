import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Team from "./Team";

interface Props {
  teams: any;
}

const Teams = ({ teams }: Props) => {
  return (
    <View style={styles.teamWrapper}>
      {teams.map((team: any) => (
        <Team image={team.player.image} size={team.numPlayers} />
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
