import React, { useContext } from "react";
import { StyleSheet, ScrollView, View } from "react-native";

// Components
import Tag from "../../../../../components/common/buttons/Tag";
import Divider from "../../../../../components/common/Divider";
import Title from "./Title";

// Context
import SearchContext from "../../context/SearchContext";

// Filters
import sortingValues from "../../filters/sortingValues";

// Types
import SortBy from "../../types/SortBy";

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
        <Title title="Ordenar por" />
      </View>
      <Divider height={6} />
      <ScrollView
        horizontal
        style={styles.scroll}
        showsHorizontalScrollIndicator={false}
      >
        <Divider width={24} />
        {sortingValues.map((sortValue) => (
          <React.Fragment key={sortValue.value}>
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
