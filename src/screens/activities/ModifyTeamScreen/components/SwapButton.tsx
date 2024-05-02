import React from "react";
import { StyleSheet, View } from "react-native";
import MainButton from "../../../../components/common/buttons/MainButton";

interface Props {
  onPress: () => void;
  status: string;
}
const SwapButton = ({ onPress, status }: Props) => {
  return (
    <View style={styles.container}>
      <MainButton
        title="Cambiar de equipo"
        onPress={onPress}
        loading={status === "loading"}
      />
    </View>
  );
};

export default SwapButton;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 24,
    width: "100%",
    height: 50,
    paddingHorizontal: 16,
  },
});
