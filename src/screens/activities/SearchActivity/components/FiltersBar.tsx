import React, { useState } from "react";
import { SlidersHorizontal } from "lucide-react-native";
import { StyleSheet, TouchableOpacity, View } from "react-native";

// Componentd
import FiltersSheet from "./FiltersSheet";

// Theme
import colors from "../../../../theme/colors";

const FiltersBar = () => {
  const [sheetOpen, setSheetOpen] = useState(false);

  const filterSheetHandler = () => {
    setSheetOpen(true);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={filterSheetHandler}>
        <SlidersHorizontal size={30} color={colors.darkPrimary} />
      </TouchableOpacity>
      <FiltersSheet open={sheetOpen} openHandler={setSheetOpen} />
    </View>
  );
};

export default FiltersBar;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    zIndex: 10,
    backgroundColor: "white",
    height: 50,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 12,
    shadowColor: "rgba(0,0,0,0,4)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
});
