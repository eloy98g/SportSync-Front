import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import ACTIVITIES_PAST from "../../../../../api/placeholders/ACTIVITIES_PAST";
import SportsCarousel from "./components/SportsCarousel";
import getSports from "./methods/getSports";

interface Props {
  userGid: number | null;
}
const SportsContainer = ({ userGid }: Props) => {
  const [activities, setActivities] = useState<any[]>([]);
  const [selectedSport, setSelectedSport] = useState<any>(null);

  useEffect(() => {
    // Todo: get past activities by user gid
    setActivities(ACTIVITIES_PAST);
  }, []);

  const sports = getSports(activities);

  return (
    <View style={styles.container}>
      <SportsCarousel
        sports={sports}
        selectedSport={selectedSport}
        setSelectedSport={setSelectedSport}
      />
    </View>
  );
};

export default SportsContainer;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
