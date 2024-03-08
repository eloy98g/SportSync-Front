import React from "react";
import { StyleSheet, Platform, View } from "react-native";

// Components
import ChatIcon from "./components/ChatIcon";
import Title from "./components/Title";

// Theme
import { PHONE } from "../../theme/breakPoints";

const Header = () => {
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
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",

    maxWidth: PHONE,
    paddingHorizontal: 12,
  },
});
