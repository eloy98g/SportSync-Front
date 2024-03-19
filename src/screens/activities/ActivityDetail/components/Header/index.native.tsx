import React from "react";
import { View, StyleSheet } from "react-native";

// Components
import Divider from "../../../../../components/common/Divider";
import ActionsGroup from "./ActionsGroup";
import Wrapper from "./Wrapper.native";
import BackButton from "./BackButton";
import Details from "../Details";
import Info from "./Info";

// Theme
import { PHONE } from "../../../../../theme/breakPoints";

interface Props {
  data: any;
  isAdmin: boolean;
  playerView?:boolean
}

const Header = ({ data, isAdmin , playerView}: Props) => {
  return (
    <View style={styles.container}>
      <Wrapper />
      <View style={styles.content}>
        <View style={styles.actions}>
          <BackButton />
          <Divider width={8}/>
          <Info data={data} />
          <ActionsGroup isAdmin={isAdmin}data={data} playerView={playerView}/>
        </View>
      </View>
      <Divider height={24}/>
      <Details data={data}/>
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
    zIndex: 10,
  },
  content: {
    width: "100%",
    maxWidth: PHONE,
    paddingHorizontal: 12,
    paddingTop: 46,
    zIndex: 3,
  },
  actions: {
    alignItems:"center",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingLeft:8
  },
});
