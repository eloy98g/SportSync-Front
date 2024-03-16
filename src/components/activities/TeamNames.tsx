import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Theme
import colors from "../../theme/colors";
import { family } from "../../theme/fonts";

const TeamNames = ({ teams }: any) => {
  return (
    <View style={styles.container}>
      {teams.map((team: any) => (
        <Text style={styles.name}>{team.name}</Text>
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
