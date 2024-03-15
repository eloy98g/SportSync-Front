import React from "react";
import { StyleSheet } from "react-native";
import { Tabs, YStack } from "tamagui";

// Components
import TabContent from "./tabs/TabContent";
import TabTitle from "./tabs/TabTitle";

// Theme
import colors from "../../../../../theme/colors";
import { family } from "../../../../../theme/fonts";

const ActivityTypeTabView = ({
  activities,
  routes,
  currentTab,
  setCurrentTab,
}: any) => {
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
        unstyled
          disablePassBorderRadius
          loop={false}
          borderBottomLeftRadius={0}
          borderBottomRightRadius={0}
          paddingBottom={4}
        >
          {routes.map((route: any) => (
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
      {routes.map((route: any) => (
        <Tabs.Content flex={1} key={route.key} value={route.key}>
          <TabContent data={activities} />
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
