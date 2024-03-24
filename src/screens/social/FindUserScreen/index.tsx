import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Components
import Screen from "../../../components/common/Screen";
import Search from "../../../components/common/inputs/Search";

const FindUserScreen = () => {
  return (
    <Screen>
      <Search onSearch={()=>{}}/>
    </Screen>
  );
};

export default FindUserScreen;

const styles = StyleSheet.create({});
