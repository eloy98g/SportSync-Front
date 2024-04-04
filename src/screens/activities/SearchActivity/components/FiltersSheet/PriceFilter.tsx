import React, { useContext } from "react";
import { StyleSheet, ScrollView, View } from "react-native";

// Components
import Tag from "../../../../../components/common/buttons/Tag";
import Divider from "../../../../../components/common/Divider";
import Title from "./Title";

// Context
import SearchContext from "../../context/SearchContext";

// Types
import PriceSlot from "../../types/PriceSlot";

const prices: { value: PriceSlot; label: string }[] = [
  { value: "0-5€", label: "0 - 5€" },
  { value: "5€-10€", label: "5€ - 10€" },
  { value: "10€-15€", label: "10€ - 15€" },
  { value: "+15€", label: "más de 15€" },
];

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
        {prices.map((price) => (
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
