import React, { useState, useRef } from "react";
import { View, StyleSheet, Platform, Text } from "react-native";
import { useNavigation, useNavigationState } from "@react-navigation/native";

// Components
import SearchContainer from "./components/SearchContainer"
import PopOver from "../common/PopOver";
import Tab from "./components/Tab";

// Methods
import getActiveRouteState from "./methods/getActiveRouteState";

const SCREENS_WHITELIST = ["Home", "Profile"];


const Footer = () => {
  const navigation = useNavigation();
  const state = useNavigationState((state) => state);
  const selectedScreen = getActiveRouteState(state)?.name;
  const footerShown = SCREENS_WHITELIST.includes(selectedScreen);
  const [searchOpen, setSearchOpen] = useState(false);
  const tabRef = useRef();

  console.log("searchOpen", searchOpen);
  const ICONS = [
    {
      key: "Home",
      onPress: () => navigation.navigate("Home" as never),
      title: "Home",
      icon: "home",
    },
    {
      key: "Search",
      onPress: () => setSearchOpen(!searchOpen),
      title: "Buscar",
      icon: "search",
    },
    {
      key: "Profile",
      onPress: () => navigation.navigate("Profile" as never),
      title: "Perfil",
      icon: "profile",
    },
  ];

  if (!footerShown) {
    return <View />;
  }

  return (
    <View style={styles.container} ref={tabRef}>
      <View style={styles.content}>
        {ICONS.map((icon) => (
          <Tab
            key={icon.key}
            data={icon}
            selected={selectedScreen === icon.key}
          />
        ))}
        <PopOver open={searchOpen} parentRef={tabRef} setOpen={setSearchOpen}>
          <SearchContainer />
        </PopOver>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: Platform.select({ ios: 80, android: 70, web: 60 }),
    paddingBottom: Platform.select({ ios: 5, android: 0 }),
    borderTopWidth: 1,
    borderTopColor: "#BCBCBC",
    position: "absolute",
    bottom: 0,
    backgroundColor: "white",
    width: "100%",
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

export default Footer;
