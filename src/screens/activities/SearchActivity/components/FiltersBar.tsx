import React, { useState } from "react";
import { SlidersHorizontal } from "lucide-react-native";
import { StyleSheet, TouchableOpacity, View } from "react-native";

// Components
import Divider from "../../../../components/common/Divider";
import TagContainer from "./TagContainer";

// Theme
import colors from "../../../../theme/colors";

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const FiltersBar = ({ setOpen }: Props) => {
  const filterSheetHandler = () => {
    setOpen(true);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={filterSheetHandler}>
        <SlidersHorizontal size={30} color={colors.primary} />
      </TouchableOpacity>
      <Divider width={12} />
      <TagContainer />
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
    paddingLeft: 12,
    alignItems: "center",
    flexDirection: "row",
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
