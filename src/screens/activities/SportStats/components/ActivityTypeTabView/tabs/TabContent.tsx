import React from "react";
import { StyleSheet, ScrollView } from "react-native";

// Components
import Activity from "./Activity";

// TODO: change any's
const TabContent = ({ data = [] }: any) => {
  return (
    <ScrollView style={styles.container}>
      {data.map((item: any) => (
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
