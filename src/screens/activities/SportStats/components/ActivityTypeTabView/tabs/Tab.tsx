import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Tab = ({ data }: any) => {
  return (
    <View style={styles.container}>
      <Text>Tab</Text>
    </View>
  );
};

export default Tab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
