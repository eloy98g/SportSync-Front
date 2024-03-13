import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import BackHeader from "../../../components/BackHeader";

// Components
import Screen from "../../../components/common/Screen";
import colors from "../../../theme/colors";

const SportStats = ({ route }: any) => {
  const activities = route.params?.currentActivities || [];
  const sport = activities[0].sport;
  return (
    <Screen>
      <StatusBar backgroundColor={colors.white} />
      <BackHeader title={sport.name} />
      <View style={styles.container}>
        <ScrollView
          style={styles.scroll}
          showsVerticalScrollIndicator={false}
        ></ScrollView>
      </View>
    </Screen>
  );
};

export default SportStats;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    height: 1,
  },
});
