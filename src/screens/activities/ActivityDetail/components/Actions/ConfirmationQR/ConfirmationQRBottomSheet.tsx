import { StyleSheet, Text, View } from "react-native";
import React from "react";
import InfoSheet from "../../TouchableInfoContainer/InfoSheet";

interface Props {
  visible: boolean;
  setVisible: (T: string | boolean) => void;
}
const ConfirmationQRBottomSheet = ({ visible, setVisible }: Props) => {
  return (
    <InfoSheet open={visible} setOpen={setVisible}>
      <View />
    </InfoSheet>
  );
};

export default ConfirmationQRBottomSheet;

const styles = StyleSheet.create({});
