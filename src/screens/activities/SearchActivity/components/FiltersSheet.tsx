import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Components
import Sheet from "../../../../components/common/Sheet";

interface Props {
  open: boolean;
  openHandler: (T: any) => void;
}

const FiltersSheet = ({ open, openHandler }: Props) => {
  return (
    <Sheet open={open} openHandler={openHandler}>
      <Text></Text>
    </Sheet>
  );
};

export default FiltersSheet;

const styles = StyleSheet.create({});
