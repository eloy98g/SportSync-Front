import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

// Components
import Icon from "./Icon";
import Title from "./Title";

const Tab = ({ data, selected }: any) => {
  const { icon, onPress, title } = data;

  return (
    <TouchableOpacity
      accessibilityRole="button"
      onPress={onPress}
      style={styles.tab}
    >
      <Icon icon={icon} active={selected} />
      <Title title={title} active={selected} />
    </TouchableOpacity>
  );
};

export default Tab;

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
});
