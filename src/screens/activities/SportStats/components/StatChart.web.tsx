import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Types
import Stats from "../../../../store/types/stats";

interface Props {
  statData: Stats;
}

// TODO: web charts
const StatChart = ({ statData }: Props) => {
  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default StatChart;

const styles = StyleSheet.create({});
