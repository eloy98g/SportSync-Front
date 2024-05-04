import React from "react";
import { StyleSheet, View } from "react-native";

// Components
import ChatIcon from "./components/ChatIcon";
import Title from "./components/Title";

// Theme
import { PHONE } from "../../theme/breakPoints";
import Divider from "../common/Divider";
import RequestsIcon from "./components/RequestsIcon";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Title />
        <View style={styles.icons}>
          <RequestsIcon />
          <Divider width={20} />
          <ChatIcon />
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  icons: { flexDirection: "row" },
  content: {
    width: "100%",
    height: 80,
    paddingTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",

    maxWidth: PHONE,
    paddingHorizontal: 12,
  },
});
