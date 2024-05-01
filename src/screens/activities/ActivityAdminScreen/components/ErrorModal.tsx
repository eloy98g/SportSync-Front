import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Components
import MainButton from "../../../../components/common/buttons/MainButton";
import Divider from "../../../../components/common/Divider";
import Modal from "../../../../components/common/Modal";

// Theme
import colors from "../../../../theme/colors";
import { family } from "../../../../theme/fonts";

interface Props {
  visible: boolean;
  setVisible: (T: any) => void;
  error: boolean;
}

const ConfirmDeleteModal = ({ visible, error, setVisible }: Props) => {
  const acceptHandler = () => {
    setVisible(false);
  };

  return (
    <Modal visible={visible} setVisible={setVisible}>
      <View style={styles.container}>
        <Text style={styles.title}>Eliminar Actividad</Text>
        <Divider height={16} />
        <Text style={styles.subtitle}>{error}</Text>
        <Divider height={16} />
        <View style={styles.row}>
          <MainButton
            title="Aceptar"
            onPress={acceptHandler}
            borderColor={colors.red}
            color={colors.red}
          />
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmDeleteModal;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  row: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  title: {
    fontFamily: family.bold,
    color: colors.black,
    fontSize: 16,
  },
  subtitle: {
    fontFamily: family.normal,
    color: colors.black,
    fontSize: 16,
  },
});
