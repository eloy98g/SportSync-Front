import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

// Components
import BackHeader from "../../../components/BackHeader";
import Screen from "../../../components/common/Screen";
import Stats from "./components/Stats";

// Theme
import colors from "../../../theme/colors";
import Divider from "../../../components/common/Divider";

const SportStats = ({ route }: any) => {
  const activities = route.params?.currentActivities || [];
  const sport = activities[0].sport;
  return (
    <Screen>
      <StatusBar backgroundColor={colors.white} />
      <BackHeader title={sport.name} />
      <View style={styles.container}>
        <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
          <Divider height={12}/>
          <Stats activities={activities} />
        </ScrollView>
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
    paddingHorizontal: 12
  },
  scroll: {
    height: 1,
    width: "100%",
  },
});
