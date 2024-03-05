import { useNavigationState } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
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
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: PHONE,
    paddingHorizontal: 12,
  },
});
