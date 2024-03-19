import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Divider from "../../../../../../components/common/Divider";

// Theme
import colors from "../../../../../../theme/colors";
import { family } from "../../../../../../theme/fonts";

const Wrapper = ({ children }: any) => {
  return (
    <View style={styles.container}>
      <Divider height={12} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>¡Deja una valoración!</Text>
        {children}
        <Divider height={80} />
      </ScrollView>
    </View>
  );
};

export default Wrapper;

const styles = StyleSheet.create({
  title: {
    fontFamily: family.bold,
    fontSize: 24,
    color: colors.black,
  },
  container: {
    width: "100%",
    height: "100%",
  },
});
