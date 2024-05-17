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
  setVisible: (T: any) => void;
  message: string;
  onFinish: () => void;
  onCancel?: () => void;
}

const MessageModal = ({
  visible,
  setVisible,
  message,
  onFinish,
  onCancel,
}: Props) => {
  const acceptHandler = () => {
    setVisible(false);
    onFinish();
  };

  const cancelHandler = () => {
    if (onCancel) {
      setVisible(false);
      onCancel();
    }
  };
  return (
    <Modal visible={visible} setVisible={setVisible} dismissable={false}>
      <View style={styles.container}>
        <Text style={styles.title}>{message}</Text>
        <Divider height={16} />

        <View style={styles.row}>
          {onCancel && (
            <>
              <MainButton
                title="Cancelar"
                onPress={cancelHandler}
                color={colors.white}
                textColor={colors.primary}
              />
              <Divider width={12} />
            </>
          )}
          <MainButton title="Aceptar" onPress={acceptHandler} />
        </View>
      </View>
    </Modal>
  );
};

export default MessageModal;

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
