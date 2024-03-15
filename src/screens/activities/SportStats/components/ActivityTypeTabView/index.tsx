import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { Tabs, YStack } from "tamagui";

// Components
import TabContent from "./tabs/TabContent";
import TabTitle from "./tabs/TabTitle";

// Theme
import colors from "../../../../../theme/colors";
import { family } from "../../../../../theme/fonts";

const routes = [
  { key: "all", title: "Todos" },
  { key: "normal", title: "Normal" },
  { key: "competitive", title: "Competitivo" },
];

const ActivityTypeTabView = ({ activities }: any) => {
  const [currentTab, setCurrentTab] = useState("all");

  const currentActivities = activities.filter(
    (item: any) => item.type === currentTab || currentTab === "all"
  );

  return (
    <Tabs
      defaultValue="all"
      value={currentTab}
      onValueChange={setCurrentTab}
      orientation="horizontal"
      size="$4"
      flex={1}
      flexDirection="column"
      activationMode="manual"
    >
      <YStack>
        <Tabs.List
          disablePassBorderRadius
          loop={false}
          borderBottomLeftRadius={0}
          borderBottomRightRadius={0}
          paddingBottom={4}
        >
          {routes.map((route) => (
            <TabTitle
              key={route.key}
              currentTab={currentTab}
              tabKey={route.key}
              title={route.title}
              onPress={() => setCurrentTab(route.key)}
            />
          ))}
        </Tabs.List>
      </YStack>
      {routes.map((route) => (
        <Tabs.Content flex={1} key={route.key} value={route.key}>
          <TabContent data={currentActivities} />
        </Tabs.Content>
      ))}
    </Tabs>
  );
};

export default ActivityTypeTabView;

const styles = StyleSheet.create({
  tabTitle: {
    fontSize: 18,
    fontFamily: family.normal,
    color: colors.primary,
  },
  tab: {
    flex: 1,
    height: 40,
    borderBottomWidth: 3,
  },
});
