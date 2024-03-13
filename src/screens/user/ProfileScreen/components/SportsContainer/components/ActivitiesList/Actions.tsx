import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Actions = () => {
  return <View style={styles.actionsWrapper}></View>;
};

export default Actions;

const styles = StyleSheet.create({
  actionsWrapper: {
    width: 80,
    height: "100%",
    borderWidth: 1,
    borderColor: "red",
  },
});
