import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BackHeader from "../../../components/BackHeader";
import Divider from "../../../components/common/Divider";
import Screen from "../../../components/common/Screen";

// Hooks
import { useAppSelector } from "../../../hooks";

const CodeScanScreen = () => {
  const userGid = useAppSelector((state) => state.user.user.gid);
  return (
    <Screen>
      <BackHeader title="Escanear Código" />
      <Divider height={80} />
      <View style={styles.container}></View>
    </Screen>
  );
};

export default CodeScanScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    borderWidth: 1,
    borderColor: "red",
  },
});
