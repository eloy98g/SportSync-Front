import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Theme
import colors from "../../../../../../../theme/colors";
import { family } from "../../../../../../../theme/fonts";

// TODO: change any for a proper type
interface Props {
  data: any;
}

const PartialScore = ({ data }: Props) => {
  const { scores, winner } = data;
  return (
    <View style={styles.container}>
      {scores?.map((score: any) => (
        <Text
          key={score.team}
          style={{
            ...styles.baseScore,
            ...(winner !== null && winner !== score.team && styles.loserScore),
          }}
        >
          {score.points}
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
