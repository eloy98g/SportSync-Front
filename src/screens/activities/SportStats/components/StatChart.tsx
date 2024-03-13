import React from "react";
import { StyleSheet, Text } from "react-native";
import { PieChart } from "react-native-gifted-charts";

// Theme
import colors from "../../../../theme/colors";
import { family } from "../../../../theme/fonts";

const StatChart = ({ statData }: any) => {
  const { victories, loses, ties, percentage } = statData;
  const pieData = [
    { value: victories, color: colors.secondary },
    { value: loses, color: colors.red },
    { value: ties, color: colors.lightenGrey },
  ];

  return (
    <PieChart
      strokeColor="white"
      donut
      radius={70}
      innerRadius={40}
      data={pieData}
      innerCircleBorderColor={"white"}
      centerLabelComponent={() => (
        <Text style={styles.text}>{percentage}%</Text>
      )}
    />
  );
};

export default StatChart;

const styles = StyleSheet.create({
  text: {
    color: colors.secondary,
    fontSize: 28,
    fontFamily: family.normal,
  },
});
