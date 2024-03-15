import React from "react";
import { View, StyleSheet } from "react-native";

// Components
import Wrapper from "./Wrapper.native";
import BackButton from "./BackButton";
import ActionsGroup from "./ActionsGroup";

// Theme
import { PHONE } from "../../../../../theme/breakPoints";

interface Props {
  isAdmin: boolean;
  startDate: number;
  duration: number;
}

const Header = (props: Props) => {
  const { isAdmin, startDate, duration } = props;
  return (
    <View style={styles.container}>
      <Wrapper />
      <View style={styles.content}>
        <View style={styles.actions}>
          <BackButton />
          <ActionsGroup isAdmin={isAdmin} />
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "absolute",
    alignItems: "center",
    top: 0,
    left: 0,
    zIndex: 1,
  },
  content: {
    width: "100%",
    maxWidth: PHONE,
    paddingHorizontal: 12,
    paddingTop: 46,
    zIndex: 3,
  },
  actions: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
});
