import React from "react";
import { View, StyleSheet } from "react-native";

// Components
import Wrapper from "./Wrapper";
import BackButton from "./BackButton";
import ActionsGroup from "./ActionsGroup";

interface Props {}

const Header = () => {
  return (
    <View style={styles.container}>
      <Wrapper>
        <View style={styles.actions}>
          <BackButton />
          <ActionsGroup />
        </View>
      </Wrapper>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 10,
  },
  actions: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
});
