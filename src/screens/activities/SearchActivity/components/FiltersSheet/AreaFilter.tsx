import React, { useContext } from "react";
import { StyleSheet, ScrollView, View } from "react-native";

// Components
import Tag from "../../../../../components/common/buttons/Tag";
import Divider from "../../../../../components/common/Divider";
import Title from "./Title";

// Context
import SearchContext from "../../context/SearchContext";

const AreaFilter = () => {
  const { filters, setFilters } = useContext(SearchContext);

  const setType = (value: boolean) => {
    setFilters((prevState) => ({
      ...prevState,
      insideUserArea: value,
    }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleWraper}>
        <Title title="Zona de juego" />
      </View>
      <Divider height={6} />
      <ScrollView
        horizontal
        style={styles.scroll}
        showsHorizontalScrollIndicator={false}
      >
        <Divider width={24} />
        <Tag
          selected={filters.insideUserArea === true}
          onPress={() => setType(true)}
          text={"En mi zona"}
        />
        <Divider width={12} />
        <Tag
          selected={filters.insideUserArea === false}
          onPress={() => setType(false)}
          text={"Cualquier zona"}
        />
      </ScrollView>
    </View>
  );
};

export default AreaFilter;

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
