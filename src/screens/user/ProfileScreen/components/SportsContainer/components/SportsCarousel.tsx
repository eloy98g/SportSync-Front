import React, { useContext } from "react";
import { StyleSheet, ScrollView, View } from "react-native";

// Components
import Divider from "../../../../../../components/common/Divider";
import SportItem from "./SportItem";

// Context
import { SportContainerContext } from "../context/SportContainerContext";

const SportsCarousel = () => {
  const { sports, setSelectedSport, selectedSport } = useContext(
    SportContainerContext
  );

  const sportHandler = (gid: number) => {
    setSelectedSport(gid);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >
        {sports.map((sport: any) => (
          <React.Fragment key={sport.gid}>
            <SportItem
              sport={sport}
              selected={selectedSport === sport.gid}
              onPress={sportHandler}
            />
            <Divider width={20} />
          </React.Fragment>
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
