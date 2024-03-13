import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PartialScore from "./PartialScore";
import FinalScore from "./FinalScore";
import LineDivider from "../../../../../../../components/common/LineDivider";
import colors from "../../../../../../../theme/colors";

// TODO: change any for a proper type
interface Props {
  result: any;
}

const Score = ({ result }: Props) => {
  const { partialScores, finalScores } = result;
  return (
    <View style={styles.scoreWrapper}>
      {partialScores.map((score: any) => (
        <PartialScore data={score} />
      ))}
      {finalScores.map((score: any) => (
        <FinalScore key={score.slot} data={score} />
      ))}
    </View>
  );
};

export default Score;

const styles = StyleSheet.create({
  scoreWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
