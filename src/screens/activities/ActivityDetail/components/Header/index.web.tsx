import React from "react";
import { View, StyleSheet } from "react-native";

// Components
import Divider from "../../../../../components/common/Divider";
import ActionsGroup from "./ActionsGroup";
import BackButton from "./BackButton";
import Wrapper from "./Wrapper";
import Info from "./Info";
import Details from "../Details";

interface Props {
  data: any;
  isAdmin: boolean;
  playerView?: boolean;
}

const Header = ({ data, isAdmin, playerView }: Props) => {
  return (
    <View style={styles.container}>
      <Wrapper>
        <View style={styles.actions}>
          <BackButton />
          <Divider width={8} />
          <Info data={data} />
          <ActionsGroup isAdmin={isAdmin} data={data} playerView={playerView} />
        </View>
      </Wrapper>
      <Details data={data} />
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
