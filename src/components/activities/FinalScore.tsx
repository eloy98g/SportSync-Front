import React from "react";
import { StyleSheet, View } from "react-native";

// Components
import FinalScoreText from "./FinalScoreText";

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
        <FinalScoreText key={score.team} {...score} winner={winner} />
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
