import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Theme
import colors from "../../theme/colors";
import { family } from "../../theme/fonts";

// TODO: change any for a proper type
interface Props {
  data: any;
}

const FinalScore = ({ data }: Props) => {
  const { scores, winner } = data;

  return (
    <View style={styles.container}>
      {scores.map((score: any) => (
        <Text
          key={score.team}
          style={{
            ...styles.baseScore,
            ...(winner === score.team && styles.winnerScore),
            ...(winner !== null && winner !== score.team && styles.loserScore),
          }}
        >
          {score.points}
        </Text>
      ))}
    </View>
  );
};

FinalScore.defaultProps = {
  data: {
    scores: [],
    winner: null,
  },
};

export default FinalScore;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "space-around",
  },
  baseScore: {
    fontFamily: family.light,
    fontSize: 24,
    color: colors.black,
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
