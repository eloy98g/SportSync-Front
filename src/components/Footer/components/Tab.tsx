import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

// Components
import Icon from "./Icon";
import Title from "./Title";

const Tab = ({ state, descriptors, navigation, route, index }: any) => {
  const { options } = descriptors[route.key];
  const isFocused = state.index === index;

  const onPress = () => {
    const event = navigation.emit({
      type: "tabPress",
      target: route.key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate({ name: route.name, merge: true });
    }
  };

  const onLongPress = () => {
    navigation.emit({
      type: "tabLongPress",
      target: route.key,
    });
  };

  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityState={isFocused ? { selected: true } : {}}
      accessibilityLabel={options.tabBarAccessibilityLabel}
      testID={options.tabBarTestID}
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.tab}
    >
      <Icon index={index} active={isFocused} />
      <Title index={index} active={isFocused} />
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
