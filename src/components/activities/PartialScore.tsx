import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Theme
import colors from "../../theme/colors";
import { family } from "../../theme/fonts";

// Types
import Score from "../../store/types/activity/Score";
import Slot from "../../store/types/activity/Slot";

interface Props {
  data: Score;
}

const PartialScore = ({ data }: Props) => {
  const { scores, winner } = data;
  return (
    <View style={styles.container}>
      {scores?.map((slot: Slot) => (
        <Text
          key={slot.team}
          style={{
            ...styles.baseScore,
            ...(winner !== null && winner !== slot.team && styles.loserScore),
          }}
        >
          {slot.points}
        </Text>
      ))}
    </View>
  );
};

PartialScore.defaultProps = {
  data: {
    scores: [],
    winner: null,
  },
};

export default PartialScore;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "space-around",
  },
  baseScore: {
    fontFamily: family.light,
    fontSize: 16,
    color: colors.black,
  },
  loserScore: {
    fontFamily: family.light,
    fontSize: 18,
    color: colors.grey,
  },
});
