import React, { useContext } from "react";
import { StyleSheet, ScrollView, View } from "react-native";

// Components
import Tag from "../../../../../components/common/buttons/Tag";
import Divider from "../../../../../components/common/Divider";
import Title from "./Title";

// Context
import SearchContext from "../../context/SearchContext";

// Filters
import priceValues from "../../filters/priceValues";

// Types
import PriceSlot from "../../types/PriceSlot";

const PriceFilter = () => {
  const { filters, setFilters } = useContext(SearchContext);

  const setPrice = (value: PriceSlot) => {
    setFilters((prevState) => ({
      ...prevState,
      price: value,
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
        {priceValues.map((price) => (
          <React.Fragment>
            <Tag
              selected={filters.price === price.value}
              onPress={() => setPrice(price.value)}
              text={price.label}
            />
            <Divider width={12} />
          </React.Fragment>
        ))}
      </ScrollView>
    </View>
  );
};

export default PriceFilter;

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
