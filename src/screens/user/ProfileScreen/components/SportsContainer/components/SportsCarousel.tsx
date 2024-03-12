import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import Divider from "../../../../../../components/common/Divider";
import SportItem from "./SportItem";

const SportsCarousel = ({ sports, setSelectedSport, selectedSport }: any) => {
  const sportHandler = (gid: number) => {
    console.log("sportHandler", gid);
    setSelectedSport(gid);
  };

  console.log("selectedSport", selectedSport);
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >
        {sports.map((sport: any) => (
          <>
            <SportItem
              sport={sport}
              selected={selectedSport === sport.gid}
              onPress={sportHandler}
            />
            <Divider width={20} />
          </>
        ))}
      </ScrollView>
    </View>
  );
};

export default SportsCarousel;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  scroll: {
    alignItems: "flex-start",
  },
});
