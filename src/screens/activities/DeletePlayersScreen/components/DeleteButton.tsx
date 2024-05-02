import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

// Components
import MainButton from "../../../../components/common/buttons/MainButton";
import ConfirmDeletePlayersModal from "./ConfirmDeletePlayersModal";

// Theme
import colors from "../../../../theme/colors";

interface Props {
  onPress: () => void;
  loading: boolean;
}

const DeleteButton = ({ onPress, loading }: Props) => {
  const [modal, setModal] = useState("");

  const finishHandler = () => {
    setModal("Delete");
  };
  
  return (
    <View style={styles.container}>
      <MainButton
        title="Eliminar jugadores"
        onPress={finishHandler}
        borderColor={colors.red}
        color={colors.red}
      />
      <ConfirmDeletePlayersModal
        visible={modal === "Delete"}
        setVisible={setModal}
        onFinish={onPress}
        loading={loading}
      />
    </View>
  );
};

export default DeleteButton;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 24,
    width: "100%",
    height: 50,
    paddingHorizontal: 16,
  },
});
