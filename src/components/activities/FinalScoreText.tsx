import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Theme
import colors from "../../theme/colors";
import { family } from "../../theme/fonts";

interface Props {
  points?: number;
  team?: string;
  winner?: string;
}

const FinalScoreText = ({ points, team, winner }: Props) => {
  return (
    <Text
      key={team}
      style={{
        ...styles.baseScore,
        ...(winner === team && styles.winnerScore),
        ...(winner !== null && winner !== team && styles.loserScore),
      }}
    >
      {points}
    </Text>
  );
};

export default FinalScoreText;

const styles = StyleSheet.create({
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
