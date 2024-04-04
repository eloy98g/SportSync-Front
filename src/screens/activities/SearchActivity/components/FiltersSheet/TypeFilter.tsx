import React, { useContext } from "react";
import { StyleSheet, ScrollView, View } from "react-native";

// Components
import Tag from "../../../../../components/common/buttons/Tag";
import Divider from "../../../../../components/common/Divider";

// Context
import SearchContext from "../../context/SearchContext";

// Types
import Title from "./Title";

// Store
import { ActivityType } from "../../../../../store/types/activity/Activity";

const SportFilter = () => {
  const { filters, setFilters } = useContext(SearchContext);

  const setType = (type: ActivityType) => {
    setFilters((prevState) => ({
      ...prevState,
      type: type,
    }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleWraper}>
        <Title title="Tipo" />
      </View>
      <Divider height={6} />
      <ScrollView
        horizontal
        style={styles.scroll}
        showsHorizontalScrollIndicator={false}
      >
        <Divider width={24} />
        <Tag
          selected={filters.type === "competitive"}
          onPress={() => setType("competitive")}
          text={"Competitivo"}
        />
        <Divider width={12} />
        <Tag
          selected={filters.type === "normal"}
          onPress={() => setType("normal")}
          text={"Normal"}
        />
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
