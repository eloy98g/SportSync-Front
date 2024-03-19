import React from "react";
import { StyleSheet, ScrollView } from "react-native";

// Components
import Divider from "../../Divider";
import Item from "./Item";

// Theme
import colors from "../../../../theme/colors";

interface Props {
  data: any;
  itemHandler: (T: any) => void;
  width: number;
}

const List = ({ data, itemHandler, width }: Props) => {
  const position = -(46 * data.length) -data.length;
  return (
    <ScrollView style={[styles.itemList, { width, bottom: position }]}>
      {data.map(({ label, value }: any) => (
        <React.Fragment key={label}>
          <Divider width="100%" color={colors.lightenGrey} />
          <Item onPress={() => itemHandler(value)} label={label} />
        </React.Fragment>
      ))}
    </ScrollView>
  );
};

export default List;

const styles = StyleSheet.create({
  itemList: {
    width: "100%",
    position: "absolute",
    zIndex: 1000,
    shadowColor: "rgba(0,0,0,0,4)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    borderColor: colors.grey,
    borderWidth: 1,
    borderTopWidth: 0,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    overflow: "hidden",
  },
});
