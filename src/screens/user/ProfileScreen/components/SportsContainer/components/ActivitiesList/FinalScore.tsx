import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Theme
import colors from "../../../../../../../theme/colors";
import { family } from "../../../../../../../theme/fonts";

// TODO: change any for a proper type
interface Props {
  data: any;
}

const FinalScore = ({ data=[] }: Props) => {
  const { scores, winner } = data;

  return (
    <View style={styles.container}>
      {scores.map((score: any) => (
        <Text
          style={winner === score.team ? styles.winnerScore : styles.loserScore}
        >
          {score.points}
        </Text>
      ))}
    </View>
  );
};

export default FinalScore;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "space-around",
  },
  winnerScore: {
    fontFamily: family.light,
    fontSize: 24,
    color: colors.secondary,
  },
  loserScore: {
    fontFamily: family.light,
    fontSize: 24,
    color: colors.red,
  },
});
