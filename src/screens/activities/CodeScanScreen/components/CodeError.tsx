import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import MainButton from "../../../../components/common/buttons/MainButton";

// Components
import Divider from "../../../../components/common/Divider";

// Theme
import colors from "../../../../theme/colors";
import { family } from "../../../../theme/fonts";

interface Props {
  data: any;
  setStatus: any;
}

const CodeError = ({ data, setStatus }: Props) => {
  const handleBack = () => {
    setStatus("idle");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>La actividad o el código no es correcto</Text>
      <MainButton title="Intentalo de nuevo" onPress={handleBack} height={46} />
    </View>
  );
};

export default CodeError;

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
