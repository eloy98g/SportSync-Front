import React from "react";
import { StyleSheet, View } from "react-native";

// Components
import Divider from "../../../../components/common/Divider";
import StatChart from "./StatChart";
import StatResume from "./StatResume";

// Methods
import getStats from "../methods/getStats";

// Todo remove anys
interface Props {
  activities: any;
}

const Stats = ({ activities }: Props) => {
  const statData = getStats(activities);

  return (
    <View style={styles.container}>
      <StatChart statData={statData} />
      <Divider width={20} />
      <StatResume statData={statData} />
    </View>
  );
};

Stats.defaultProps = {
  activities: [],
};

export default Stats;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
});
