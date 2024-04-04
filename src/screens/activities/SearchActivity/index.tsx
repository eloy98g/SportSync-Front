import React from "react";
import { StyleSheet, View } from "react-native";

// Components
import BackHeader from "../../../components/BackHeader";
import Screen from "../../../components/common/Screen";
import FiltersBar from "./components/FiltersBar";

// Context
import { SearchProvider } from "./context/SearchContext";

// Theme
import colors from "../../../theme/colors";
import ActivitiesList from "./components/ActivitiesList";

const SearchActivity = () => {
  return (
    <Screen>
      <BackHeader title="Buscar" showShadow={false} />
      <SearchProvider>
        <View style={styles.content}>
          <FiltersBar />
          <ActivitiesList />
        </View>
      </SearchProvider>
    </Screen>
  );
};

export default SearchActivity;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 80,
    width: "100%",
  },
});
