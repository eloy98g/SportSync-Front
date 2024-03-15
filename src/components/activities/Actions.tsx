import React from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

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
  gid: number;
}
const Actions = ({ type, endDate, gid }: Props) => {
  const navigation = useNavigation();
  const moreInfoHandler = () => {
    navigation.navigate("ActivityDetail" as never, { gid } as never);
  };

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
