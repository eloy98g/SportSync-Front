import { useNavigationState } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Platform, View } from "react-native";
import { PHONE } from "../../theme/breakPoints";
import getActiveRouteState from "../Footer/methods/getActiveRouteState";
import ChatIcon from "./components/ChatIcon";
import Title from "./components/Title";

const SCREENS_WHITELIST = ["Home"];

const Header = () => {
  const state = useNavigationState((state) => state);
  const selectedScreen = getActiveRouteState(state)?.name;
  const headerShown = SCREENS_WHITELIST.includes(selectedScreen);

  if (!headerShown) {
    return <View />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Title />
        <ChatIcon />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  content: {
    width: "100%",
    height: Platform.select({ ios: 70, android: 90, web: 50 }),
    paddingTop: Platform.select({ ios: 30, android: 50, web: 10 }),
    flexDirection: "row",
    justifyContent: "space-between",
    
    maxWidth: PHONE,
    paddingHorizontal: 12,
  },
});
