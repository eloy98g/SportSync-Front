import React, { useContext } from "react";
import { StyleSheet, ScrollView, View } from "react-native";

// Components
import Tag from "../../../../components/common/buttons/Tag";
import Divider from "../../../../components/common/Divider";

// Context
import SearchContext from "../context/SearchContext";
import priceValues from "../filters/priceValues";
import sortingValues from "../filters/sortingValues";
import typeValues from "../filters/typeValues";

const TagContainer = () => {
  const { filters, sports } = useContext(SearchContext);

  const typeText =
    typeValues.find((type) => type.value === filters.type)?.label || "";
  const areaText = filters.insideUserArea ? "En mi zona" : "Cualquier zona";
  const priceText =
    priceValues.find((price) => price.value === filters.price)?.label || "";
  const sortByText =
    sortingValues.find((sort) => sort.value === filters.sortBy)?.label || "";

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        style={styles.scroll}
        showsHorizontalScrollIndicator={false}
      >
        {filters.sports.map((gid) => {
          const sportName = sports.find((sport) => sport.gid === gid)?.name;
          if (sportName) {
            return (
              <>
                <Divider width={12} />
                <Tag text={sportName} />
              </>
            );
          }
        })}
        {typeText !== "" && <Divider width={12} />}
        {typeText !== "" && <Tag text={typeText} />}
        <Divider width={12} />
        <Tag text={areaText} />
        {priceText !== "" && <Divider width={12} />}
        {priceText !== "" && <Tag text={priceText} />}
        {sortByText !== "" && <Divider width={12} />}
        {sortByText !== "" && <Tag text={sortByText} />}
        {sortByText !== "" && <Divider width={12} />}
      </ScrollView>
    </View>
  );
};

export default TagContainer;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
  },
  scroll: {
    width: "100%",
  },
});
