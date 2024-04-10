import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Types
import Activity from "../../../../store/types/activity/Activity";
import Teams from "../../ActivityDetail/components/Teams";

interface Props {
  selectedActivity: Activity | undefined;
}
const ActivityScore = ({ selectedActivity }: Props) => {
  if (!selectedActivity) {
    return <View />;
  }
  return (
    <View>
      <Teams activity={selectedActivity} />
    </View>
  );
};

export default ActivityScore;

const styles = StyleSheet.create({});
