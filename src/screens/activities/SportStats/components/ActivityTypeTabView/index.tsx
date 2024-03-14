import React, { useState, useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import {
  AnimatePresence,
  StackProps,
  styled,
  TabLayout,
  Tabs,
  TabsTabProps,
  YStack,
} from "tamagui";

// Components
import Tab from "./tabs/Tab";

// Theme
import colors from "../../../../../theme/colors";
import { family } from "../../../../../theme/fonts";

const routes = [
  { key: "all", title: "Todos" },
  { key: "normal", title: "Normal" },
  { key: "competitive", title: "Competitivo" },
];

const TabsRovingIndicator = ({
  active,
  ...props
}: { active?: boolean } & StackProps) => {
  return (
    <YStack
      position="absolute"
      backgroundColor={colors.grey}
      opacity={0.7}
      animation="100ms"
      enterStyle={{
        opacity: 0,
      }}
      exitStyle={{
        opacity: 0,
      }}
      {...(active && {
        backgroundColor: colors.primary,
        opacity: 1,
      })}
      {...props}
    />
  );
};

const AnimatedYStack = styled(YStack, {
  variants: {
    isLeft: { true: { x: -25, opacity: 0 } },
    isRight: { true: { x: 25, opacity: 0 } },
    defaultFade: { true: { opacity: 0 } },
  } as const,
});

// TODO: revisit component and divide it
const ActivityTypeTabView = ({ activities }: any) => {
  const [tabState, setTabState] = useState<{
    currentTab: string;
    intentAt: TabLayout | null;
    activeAt: TabLayout | null;
    prevActiveAt: TabLayout | null;
  }>({
    activeAt: null,
    currentTab: "all",
    intentAt: null,
    prevActiveAt: null,
  });

  const currentActivities = activities.filter(
    (item: any) => item.type === tabState.currentTab || tabState.currentTab === "all"
  );

  const setCurrentTab = (currentTab: string) =>
    setTabState({ ...tabState, currentTab });
  const setIntentIndicator = (intentAt: any) =>
    setTabState({ ...tabState, intentAt });
  const setActiveIndicator = (activeAt: any) =>
    setTabState({ ...tabState, prevActiveAt: tabState.activeAt, activeAt });
  const { activeAt, intentAt, prevActiveAt, currentTab } = tabState;

  const direction = (() => {
    if (!activeAt || !prevActiveAt || activeAt.x === prevActiveAt.x) {
      return 0;
    }
    return activeAt.x > prevActiveAt.x ? -1 : 1;
  })();

  const enterVariant =
    direction === 1 ? "isLeft" : direction === -1 ? "isRight" : "defaultFade";
  const exitVariant =
    direction === 1 ? "isRight" : direction === -1 ? "isLeft" : "defaultFade";

  const handleOnInteraction: TabsTabProps["onInteraction"] = (type, layout) => {
    if (type === "select") {
      setActiveIndicator(layout);
    } else {
      setIntentIndicator(layout);
    }
  };

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
        <AnimatePresence>
          {intentAt && (
            <TabsRovingIndicator
              width={intentAt.width}
              height="$0.5"
              x={intentAt.x}
              bottom={0}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {activeAt && (
            <TabsRovingIndicator
              theme="active"
              active
              width={activeAt.width}
              height="$0.5"
              x={activeAt.x}
              bottom={0}
            />
          )}
        </AnimatePresence>
        <Tabs.List
          disablePassBorderRadius
          loop={false}
          borderBottomLeftRadius={0}
          borderBottomRightRadius={0}
          paddingBottom={4}
        >
          {routes.map((route) => (
            <Tabs.Tab
              unstyled
              paddingVertical={4}
              paddingHorizontal={12}
              key={route.key}
              value={route.key}
              onInteraction={handleOnInteraction}
            >
              <Text
                style={[
                  styles.tabTitle,
                  {
                    color:
                      currentTab === route.key ? colors.primary : colors.grey,
                  },
                ]}
              >
                {route.title}
              </Text>
            </Tabs.Tab>
          ))}
        </Tabs.List>
      </YStack>

      <AnimatePresence
        exitBeforeEnter
        enterVariant={enterVariant}
        exitVariant={exitVariant}
      >
        <AnimatedYStack
          key={currentTab}
          animation="100ms"
          x={0}
          opacity={1}
          flex={1}
        >
          {routes.map((route) => (
            <Tabs.Content flex={1} key={route.key} value={route.key}>
              <Tab data={currentActivities} />
            </Tabs.Content>
          ))}
        </AnimatedYStack>
      </AnimatePresence>
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
});
