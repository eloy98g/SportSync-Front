import React from "react";
import {
  Modal as RNModal,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

interface Props {
  children: React.JSX.Element;
  setVisible: () => void;
  visible: boolean;
  dismissable?: boolean;
}

const Modal = ({
  children,
  setVisible,
  visible,
  dismissable = true,
}: Props) => {
  return (
    <RNModal
      animationType="fade"
      transparent={true}
      visible={visible}
      style={styles.modal}
      statusBarTranslucent
    >
      <View style={styles.centeredView}>
        <TouchableOpacity
          style={styles.closeContainer}
          onPress={dismissable ? setVisible : () => {}}
        />
        <View style={[styles.modalView]}>{children}</View>
      </View>
    </RNModal>
  );
};

export default Modal;

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    height: "100%",
  },
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  closeContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.3)",
    height: "100%",
  },
  modalView: {
    width: "90%",
    maxHeight: "90%",
    backgroundColor: "white",
    borderRadius: 12,
    padding: 18,
    alignItems: "center",
    justifyContent: "flex-start",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
