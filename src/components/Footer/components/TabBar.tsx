import React from "react";
import { View, StyleSheet, Platform } from "react-native";

// Components
import Tab from "./Tab";

// Methods
import getActiveRouteState from "../methods/getActiveRouteState";

const TabBar = ({ state, descriptors, navigation }: any) => {
  const activeRoute = getActiveRouteState(state);
  const hiddenTabBar =
    activeRoute?.state?.index && activeRoute?.state?.index !== 0;

  if (hiddenTabBar) {
    return <View></View>;
  }
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {state.routes.map((route: any, index: any) => (
          <Tab
            key={index}
            state={state}
            descriptors={descriptors}
            navigation={navigation}
            route={route}
            index={index}
          />
        ))}
      </View>
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: Platform.OS === "ios" ? 80 : 70,
    paddingBottom: Platform.OS === "ios" ? 5 : 0,
    borderTopWidth: 1,
    borderTopColor: "#BCBCBC",
    position: "relative",
    backgroundColor: "white",
  },
  content: {
    width: "100%",
    height: "100%",
    maxWidth: 400,
    paddingHorizontal: 18,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
