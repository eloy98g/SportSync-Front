import React from "react";
import { StyleSheet, View } from "react-native";

// Components
import FinalScoreText from "./FinalScoreText";

// Theme
import colors from "../../theme/colors";
import { family } from "../../theme/fonts";

// Types
import Score from "../../store/types/activity/Score";
import Slot from "../../store/types/activity/Slot";

interface Props {
  data: Score;
}

const FinalScore = ({ data }: Props) => {
  const { scores, winner } = data;

  return (
    <View style={styles.container}>
      {scores.map((slot: Slot) => (
        <FinalScoreText key={slot.team} {...slot} winner={winner} />
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
