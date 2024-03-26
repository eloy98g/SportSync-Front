import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Theme
import colors from "../../../../../theme/colors";
import { family } from "../../../../../theme/fonts";

// Types
import Activity from "../../../../../store/types/Activity";

// Utils
import getDateWithDuration from "../../../../../utils/date/getDateWithDuration";

interface Props {
  data: Activity;
}

const Info = ({ data }: Props) => {
  const { sport, startDate, duration } = data;

  const date = getDateWithDuration(startDate, duration);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{sport.name}</Text>
      <Text style={styles.subtitle}>{date}</Text>
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  title: {
    fontFamily: family.bold,
    color: colors.white,
    fontSize: 14,
  },
  subtitle: {
    fontFamily: family.normal,
    color: colors.white,
    fontSize: 12,
  },
});
