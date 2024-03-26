import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Components
import ResumeItem from "./ResumeItem";

// Theme
import colors from "../../../../theme/colors";
import { family } from "../../../../theme/fonts";

// Types
import Stats from "../../../../store/types/stats";

// Utils
import unixToDate from "../../../../utils/date/unixToDate";

interface Props {
  statData: Stats;
}

const StatResume = ({ statData }: Props) => {
  const { victories, ties, loses, victoryStreak, lastActivityDate } = statData;

  const dateText = lastActivityDate
    ? `Última participación: ${unixToDate(lastActivityDate as number)}`
    : "No se ha participado todavía";
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <ResumeItem
          title={victories}
          subtitle="Victorias"
          color={colors.secondary}
        />
        <ResumeItem title={loses} subtitle="Derrotas" color={colors.red} />
        <ResumeItem title={ties} subtitle="Empates" color={colors.grey} />
      </View>

      <Text style={styles.text}>Mejor racha de victorias: {victoryStreak}</Text>
      <Text style={styles.text}>{dateText}</Text>
    </View>
  );
};

export default StatResume;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 14,
    fontFamily: family.semibold,
    color: colors.grey,
  },
});
