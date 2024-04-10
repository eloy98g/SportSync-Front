import React from "react";
import { StyleSheet, Text, View } from "react-native";

import TeamT from "../../../../store/types/activity/Team";

interface Props {
  teams: TeamT;
  gid: number;
}

const ScoreInput = ({ teams, gid }: Props) => {
  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default ScoreInput;

const styles = StyleSheet.create({});
