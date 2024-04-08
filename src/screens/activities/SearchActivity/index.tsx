import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

// Components
import ActivitiesList from "./components/ActivitiesList";
import BackHeader from "../../../components/BackHeader";
import Screen from "../../../components/common/Screen";
import FiltersBar from "./components/FiltersBar";

// Context
import { SearchProvider } from "./context/SearchContext";

// Theme
import colors from "../../../theme/colors";
import FiltersSheet from "./components/FiltersSheet";

const SearchActivity = () => {
  const [sheetOpen, setSheetOpen] = useState(false);
  return (
    <Screen>
      <SearchProvider>
        <BackHeader title="Buscar" showShadow={false} />
        <View style={styles.content}>
          <FiltersBar setOpen={setSheetOpen} />
          <ActivitiesList />
        </View>
        <FiltersSheet open={sheetOpen} openHandler={setSheetOpen}  />
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
