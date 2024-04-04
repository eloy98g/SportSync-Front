import React, { useContext } from "react";
import { StyleSheet, ScrollView, View } from "react-native";

// Components
import Tag from "../../../../../components/common/buttons/Tag";
import Divider from "../../../../../components/common/Divider";
import Title from "./Title";

// Context
import SearchContext from "../../context/SearchContext";

// Types
import SortBy from "../../types/SortBy";

const sortingValues: { value: SortBy; label: string }[] = [
  { value: "recent", label: "Más recientes" },
  { value: "numPlayers", label: "Número de jugadores" },
  { value: "closest", label: "Más cercano" },
];

const SortByFilter = () => {
  const { filters, setFilters } = useContext(SearchContext);

  const setPrice = (value: SortBy) => {
    setFilters((prevState) => ({
      ...prevState,
      sortBy: value,
    }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleWraper}>
        <Title title="Precio" />
      </View>
      <Divider height={6} />
      <ScrollView
        horizontal
        style={styles.scroll}
        showsHorizontalScrollIndicator={false}
      >
        <Divider width={24} />
        {sortingValues.map((sortValue) => (
          <React.Fragment>
            <Tag
              selected={filters.sortBy === sortValue.value}
              onPress={() => setPrice(sortValue.value)}
              text={sortValue.label}
            />
            <Divider width={12} />
          </React.Fragment>
        ))}
      </ScrollView>
    </View>
  );
};

export default SortByFilter;

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
