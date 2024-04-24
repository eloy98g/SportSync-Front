import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Components
import MainButton from "../../../buttons/MainButton";
import Divider from "../../../Divider";

// Theme
import colors from "../../../../../theme/colors";
import { family } from "../../../../../theme/fonts";

interface Props {
  onPress: () => void;
}

const PermissionError = ({ onPress }: Props) => {
  return (
    <View style={styles.container}>
      <Text>{`No se cuenta con permisos de cámara.\nActívala para poder escanear el código.`}</Text>
      <Divider height={12} />
      <MainButton title={"Activar cámara"} onPress={onPress} />
    </View>
  );
};

export default PermissionError;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: family.normal,
    fontSize: 14,
    color: colors.black,
  },
});
