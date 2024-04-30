import React, { useContext } from "react";
import { StyleSheet, ScrollView, View } from "react-native";

// Components
import Divider from "../../../../../components/common/Divider";
import SportTag from "./SportTag";
import Title from "./Title";

// Context
import SearchContext from "../../context/SearchContext";

const SportFilter = () => {
  const { sports, filters, setFilters } = useContext(SearchContext);

  console.log('{ sports, filters, setFilters } ',{ sports, filters, setFilters } )
  const sportHandler = (gid: number) => {
    const sportSelected = filters.sports.includes(gid);
    setFilters((prevState) => ({
      ...prevState,
      sports: sportSelected
        ? prevState.sports.filter((item) => item !== gid)
        : [...prevState.sports, gid],
    }));
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
          <React.Fragment key={sport.gid}>
            <SportTag
              onPress={() => sportHandler(sport.gid)}
              {...sport}
              selected={filters.sports.includes(sport.gid)}
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
