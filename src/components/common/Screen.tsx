import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";

// Theme
import colors from "../../theme/colors";

const Screen = ({ children }: any) => {
  return (
    <View style={styles.screen}>
      <StatusBar translucent backgroundColor="transparent" />
      {children}
    </View>
  );
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
});
