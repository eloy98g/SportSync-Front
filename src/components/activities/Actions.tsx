import React from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Components
import Tag from "./Tag";
import Action from "./Action";

// Types
import { ActivityType } from "../../store/types/activity/Activity";

// Utils
import unixToDate from "../../utils/date/unixToDate";
import useNavigate from "../../hooks/useNavigate";

interface Props {
  type: ActivityType;
  startDate: number;
  gid: string;
}
const Actions = ({ type, startDate, gid }: Props) => {
  const { navigateTo } = useNavigate();
  const moreInfoHandler = () => {
    navigateTo("ActivityDetail", { gid });
  };

  const typeText = type === "competitive" ? "Competitiva" : "Normal";
  const date = unixToDate(startDate);

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
