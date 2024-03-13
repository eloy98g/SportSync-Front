import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { ChevronRight } from "lucide-react-native";

// Components
import Divider from "../../../../../../components/common/Divider";
import Title from "./Title";
import Stat from "./Stat";

// Context
import { SportContainerContext } from "../context/SportContainerContext";
import TouchableText from "../../../../../../components/common/buttons/TouchableText";

// Theme
import { family } from "../../../../../../theme/fonts";
import colors from "../../../../../../theme/colors";

// Utils
import unixToDate from "../../../../../../utils/date/unixToDate";

const SportStats = () => {
  const { selectedSport, activities } = useContext(SportContainerContext);

  const currentActivities = activities.filter(
    (act) => act.sport.gid === selectedSport
  );
  const participations = currentActivities.length.toString();
  const victories = currentActivities
    .filter((item) => item.result.result === "victory")
    .length.toString();

  const lastTime = currentActivities.reduce((maxDate, obj) => {
    return Math.max(maxDate, obj.endDate);
  }, 0);

  
  const moreStatsHandler = () => {};

  return (
    <>
      <Divider height={14} />
      <View style={styles.container}>
        <Stat title={participations} subtitle="Partidos" />
        <Stat title={victories} subtitle="Victorias" />
        <Stat title={unixToDate(lastTime)} subtitle="Últ. vez" size={18} />
      </View>
      <View style={styles.row}>
        <TouchableText
          textStyle={styles.text}
          text={"Ver más"}
          onPress={moreStatsHandler}
        />
        <ChevronRight color={colors.grey} size={14} />
      </View>
    </>
  );
};

export default SportStats;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  row: {
    flexDirection: "row",
    paddingTop: 4,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  text: {
    fontFamily: family.bold,
    color: colors.grey,
    fontSize: 14,
  },
});
