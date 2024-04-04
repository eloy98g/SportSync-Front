import React, { useContext, useState } from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";

// Components
import SportTag from "./SportTag";

// Context
import SearchContext from "../../context/SearchContext";

// Types
import Divider from "../../../../../components/common/Divider";
import Title from "./Title";

const SportFilter = () => {
  const { sports, filters, setFilters } = useContext(SearchContext);

  const sportHandler = (gid: number) => {
    setFilters((prevState) => ({ ...prevState, sport: gid }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleWraper}>
        <Title title="Deporte" />
      </View>
      <Divider height={6} />
      <ScrollView
        horizontal
        style={styles.scroll}
        showsHorizontalScrollIndicator={false}
      >
        <Divider width={24} />
        {sports.map((sport) => (
          <React.Fragment>
            <SportTag
              onPress={() => sportHandler(sport.gid)}
              {...sport}
              selected={sport.gid === filters.sport}
            />
            <Divider width={10} />
          </React.Fragment>
        ))}
      </ScrollView>
    </View>
  );
};

export default SportFilter;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  scroll: {
    width: "100%",
  },
  titleWraper: {
    paddingLeft: 24,
  },
});
