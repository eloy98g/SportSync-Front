import React from "react";
import { StyleSheet, View } from "react-native";

// Components
import Tag from "./Tag";
import Action from "./Action";

// Types
import { ActivityType } from "../../store/types/Activity";

// Utils
import unixToDate from "../../utils/date/unixToDate";

interface Props {
  type: ActivityType;
  endDate: number;
}
const Actions = ({ type, endDate }: Props) => {
  const moreInfoHandler = () => {};

  const typeText = type === "competitive" ? "Competitiva" : "Normal";
  const date = unixToDate(endDate);

  return (
    <View style={styles.actionsWrapper}>
      <Tag text={typeText} />
      <Tag text={date} />
      <Action text="Ver más" onPress={moreInfoHandler} />
    </View>
  );
};

export default Actions;

const styles = StyleSheet.create({
  actionsWrapper: {
    width: 80,
    height: "100%",
    justifyContent: "space-between",
  },
});
