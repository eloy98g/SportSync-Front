import { StyleSheet, Text, View } from "react-native";
import React from "react";
import InfoSheet from "../../TouchableInfoContainer/InfoSheet";
import QRCode from "react-native-qrcode-svg";
import { family } from "../../../../../../theme/fonts";
import colors from "../../../../../../theme/colors";
import Divider from "../../../../../../components/common/Divider";

interface Props {
  visible: boolean;
  setVisible: (T: string | boolean) => void;
  code: string;
}
const ConfirmationQRBottomSheet = ({ visible, setVisible, code }: Props) => {
  return (
    <InfoSheet open={visible} setOpen={setVisible}>
      <Divider height={1}/>
      <Text style={styles.title}>
        Con éste código los participantes podrán confirmar su asistencia:
      </Text>
      <QRCode value={code} size={200} />
      <Text style={styles.text}>
        {`El código es visible dos horas antes de que empiece la actividad y hasta dos horas después de que ésta finalice.\n¡No olvides confirmar la asistencia de los participantes!`}
      </Text>
    </InfoSheet>
  );
};

export default ConfirmationQRBottomSheet;

const styles = StyleSheet.create({
  title: {
    fontFamily: family.bold,
    color: colors.black,
    fontSize: 14,
    textAlign: "center",
  },
  text: {
    fontFamily: family.normal,
    color: colors.black,
    fontSize: 14,
    textAlign: "center",
  },
});
