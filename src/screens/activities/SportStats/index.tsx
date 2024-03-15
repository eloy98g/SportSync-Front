import React, { useState } from "react";
import { StyleSheet, View, StatusBar } from "react-native";

// Components
import ActivityTypeTabView from "./components/ActivityTypeTabView";
import BackHeader from "../../../components/BackHeader";
import Divider from "../../../components/common/Divider";
import Screen from "../../../components/common/Screen";
import Stats from "./components/Stats";

// Theme
import colors from "../../../theme/colors";

const routes = [
  { key: "all", title: "Todos" },
  { key: "normal", title: "Normal" },
  { key: "competitive", title: "Competitivo" },
];

const SportStats = ({ route }: any) => {
  const [currentTab, setCurrentTab] = useState("all");

  const activities = route.params?.currentActivities || [];
  const sport = activities[0].sport;
  const currentActivities = activities.filter(
    (item: any) => item.type === currentTab || currentTab === "all"
  );
  return (
    <Screen>
      <StatusBar backgroundColor={colors.white} />
      <BackHeader title={sport.name} />
      <View style={styles.container}>
        <Divider height={12} />
        <Stats activities={currentActivities} />
        <Divider height={12} />
        <ActivityTypeTabView
          activities={currentActivities}
          routes={routes}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
      </View>
    </Screen>
  );
};

export default SportStats;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 12,
  },
});
