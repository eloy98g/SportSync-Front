import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

// Components
import MainButton from "../common/buttons/MainButton";
import Divider from "../common/Divider";
import Modal from "../common/Modal";
import MessageModal from "../modals/MessageModal";

// Hooks
import useStatus from "../../hooks/useStatus";

// Services
import Api from "../../services/api";

// Theme
import colors from "../../theme/colors";
import { family } from "../../theme/fonts";

// Types
import { Report } from "./ReportSheet";

interface Props {
  visible: boolean;
  setVisible: (T: boolean) => void;
  report: Report | null;
  onFinish: () => void;
}

const ConfirmReportModal = ({ visible, setVisible, report, onFinish }: Props) => {
  const [modal, setModal] = useState("");
  const [message, setMessage] = useState("");
  const { status, setStatus } = useStatus();


  const finishHandler = () => {
    setModal("")
    onFinish()
  }
  const acceptHandler = async () => {
    setStatus("loading");
    try {
      const response = await Api.report.report(report);
      const { message, status } = response;
      if (status === "success") {
        setMessage(
          "Reporte creado con éxito. Estudiaremos el caso en los próximos días."
        );
        setStatus("success");
      } else {
        setMessage(message);
        setStatus("error");
      }
    } catch (error: any) {
      setMessage(error.message);
      setStatus("error");
    }
    setModal("Message");
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
            loading={status === "loading"}
          />
        </View>
      </View>
      <MessageModal
        visible={modal === "Message"}
        setVisible={setModal}
        message={message}
        onFinish={finishHandler}
      />
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
