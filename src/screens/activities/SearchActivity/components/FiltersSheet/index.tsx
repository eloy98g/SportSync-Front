import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Components
import Sheet from "../../../../../components/common/Sheet";
import AreaFilter from "./AreaFilter";
import PriceFilter from "./PriceFilter";
import SortByFilter from "./SortByFilter";
import SportFilter from "./SportFilter";
import TypeFilter from "./TypeFilter";

// Theme
import colors from "../../../../../theme/colors";
import { family } from "../../../../../theme/fonts";

interface Props {
  open: boolean;
  openHandler: (T: any) => void;
}

const FiltersSheet = ({ open, openHandler }: Props) => {
  return (
    <Sheet open={open} openHandler={openHandler} padding={0}>
      <Text style={styles.title}>Filtros</Text>
      <SportFilter />
      <TypeFilter />
      <AreaFilter />
      <PriceFilter />
      <SortByFilter />
    </Sheet>
  );
};

export default FiltersSheet;

const styles = StyleSheet.create({
  title: {
    fontFamily: family.normal,
    color: colors.darkPrimary,
    fontSize: 24,
  },
});
