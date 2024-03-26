import React from "react";
import { StyleSheet, ScrollView } from "react-native";

// Components
import ActivityT from "../../../../../../store/types/activity/Activity";

// Components
import Activity from "./Activity";

interface Props {
  data: ActivityT[];
}

const TabContent = ({ data = [] }: Props) => {
  return (
    <ScrollView style={styles.container}>
      {data.map((item: ActivityT) => (
        <Activity key={item.gid} data={item} />
      ))}
    </ScrollView>
  );
};

export default TabContent;

const styles = StyleSheet.create({
  container: {
    height: 1,
    width: "100%",
  },
});
