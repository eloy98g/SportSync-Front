import React from "react";
import { StyleSheet, ActivityIndicator, Text, View } from "react-native";
import Divider from "../../../../components/common/Divider";
import colors from "../../../../theme/colors";
import { family } from "../../../../theme/fonts";

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={colors.primary} size="small" />
      <Divider height={10} />
      <Text style={styles.text}>Cargando...</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 90,
    backgroundColor: colors.white,
  },
  text: {
    fontFamily: family.normal,
    fontSize: 14,
    color: colors.primary,
  },
});
