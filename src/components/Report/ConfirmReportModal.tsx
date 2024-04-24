import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Components
import MainButton from "../common/buttons/MainButton";
import Divider from "../common/Divider";
import Modal from "../common/Modal";

// Theme
import colors from "../../theme/colors";
import { family } from "../../theme/fonts";

interface Props {
  visible: boolean;
  setVisible: (T: boolean) => void;
  onFinish: () => void;
}

const ConfirmReportModal = ({ visible, setVisible, onFinish }: Props) => {
  const acceptHandler = () => {
    onFinish();
  };
  const cancelHandler = () => {
    setVisible(false);
  };

  return (
    <Modal visible={visible} setVisible={setVisible}>
      <View style={styles.container}>
        <Text style={styles.title}>Reportar usuario</Text>
        <Divider height={16} />
        <Text style={styles.subtitle}>
          {`Estás a punto de reportar a este usuario. Esta acción será definitiva.\n¿Seguro que quieres reportar?`}
        </Text>
        <Divider height={16} />
        <View style={styles.row}>
          <MainButton
            title="Cancelar"
            onPress={cancelHandler}
            borderColor={colors.primary}
            color={colors.white}
            textColor={colors.primary}
          />
          <Divider width={20} />
          <MainButton
            title="Reportar"
            onPress={acceptHandler}
            borderColor={colors.red}
            color={colors.white}
            textColor={colors.red}
          />
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmReportModal;

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
