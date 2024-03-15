import React from "react";
import { StyleSheet, Text } from "react-native";
import { Tabs } from "tamagui";

// Theme
import colors from "../../../../../../theme/colors";
import { family } from "../../../../../../theme/fonts";

interface Props {
  currentTab: string;
  tabKey: string;
  title: string;
  onPress: () => void;
}

const TabTitle = ({ currentTab, tabKey, title, onPress }: Props) => {
  const selectedColor =
    currentTab === tabKey ? colors.primary : colors.lightenGrey;
  return (
    <Tabs.Tab
      unstyled
      key={tabKey}
      value={tabKey}
      onInteraction={onPress}
      borderBottomColor={selectedColor}
      style={styles.tab}
    >
      <Text style={[styles.tabTitle, { color: selectedColor }]}>{title}</Text>
    </Tabs.Tab>
  );
};

export default TabTitle;

const styles = StyleSheet.create({
  tabTitle: {
    fontSize: 18,
    fontFamily: family.normal,
    color: colors.primary,
  },
  tab: {
    flex: 1,
    borderWidth:0,
    height: 40,
    borderBottomWidth: 3,
    backgroundColor:colors.white
  },
});
