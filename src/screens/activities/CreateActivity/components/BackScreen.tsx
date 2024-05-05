import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../../../theme/colors";
import useNavigate from "../../../../hooks/useNavigate";
import MainButton from "../../../../components/common/buttons/MainButton";

const BackScreen = () => {
  const { navigateTo } = useNavigate();

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <MainButton
          title="Ir a la página principal"
          onPress={() => navigateTo("Home")}
        />
      </View>
    </View>
  );
};

export default BackScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    paddingHorizontal: 16,
    paddingTop: 50,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "100%",
    height: 50,
  },
});
