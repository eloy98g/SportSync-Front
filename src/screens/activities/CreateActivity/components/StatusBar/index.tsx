import React from "react";
import { StyleSheet, View } from "react-native";
import { Progress } from "tamagui";
import colors from "../../../../../theme/colors";

interface Props {
  value?: number;
}

const StatusBar = ({ value }: Props) => {
  return (
    <View style={styles.container}>
      <Progress
        size={2}
        value={value || 0}
        unstyled
        style={styles.progressContainer}
      >
        <Progress.Indicator animation="tooltip" unstyled style={styles.progress} />
      </Progress>
    </View>
  );
};

export default StatusBar;

const styles = StyleSheet.create({
  container: {
    height: 10,
  },
  progressContainer: {
    width: "100%",
    borderRadius: 30,
    // borderWidth: 1,
    // borderColor: colors.lightenGrey,
    backgroundColor: colors.lightenGrey,
    overflow: "hidden"
  },
  progress: {
    width:"100%",
    height:"100%",
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
});
