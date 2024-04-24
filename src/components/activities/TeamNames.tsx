import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Theme
import colors from "../../theme/colors";
import { family } from "../../theme/fonts";

// Types
import Team from "../../store/types/activity/Team";

interface Props {
  teams: Team[];
}

const TeamNames = ({ teams }: Props) => {
  return (
    <View style={styles.container}>
      {teams.map((team: Team) => (
        <Text key={team.name} style={styles.name}>
          {team.name}
        </Text>
      ))}
    </View>
  );
};

export default TeamNames;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "space-around",
  },
  name: {
    fontFamily: family.normal,
    color: colors.grey,
    fontSize: 24,
  },
});
