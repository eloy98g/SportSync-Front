import React from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
import Activity from "./Activity";

// TODO: change any's
const Tab = ({ data = [] }: any) => {
  return (
    <ScrollView style={styles.container}>
      {data.map((item: any) => (
        <Activity key={item.gid} data={item} />
      ))}
    </ScrollView>
  );
};

export default Tab;

const styles = StyleSheet.create({
  container: {
    height: 1,
    width:"100%",
  },
});
