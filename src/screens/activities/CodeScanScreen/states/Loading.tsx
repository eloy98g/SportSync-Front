import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";

// Components
import Divider from "../../../../components/common/Divider";

// Theme
import colors from "../../../../theme/colors";
import { family } from "../../../../theme/fonts";

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={colors.primary} size="small" />
      <Divider height={20} />
      <Text style={styles.text}>Cargando...</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
  },
  text: {
    fontFamily: family.normal,
    color: colors.primary,
    fontSize: 14,
  },
});
