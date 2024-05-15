import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import MainButton from "../../../../../../components/common/buttons/MainButton";
import colors from "../../../../../../theme/colors";
import Divider from "../../../../../../components/common/Divider";
import Activity from "../../../../../../store/types/activity/Activity";
import InfoSheet from "../../TouchableInfoContainer/InfoSheet";
import ConfirmationQRBottomSheet from "./ConfirmationQRBottomSheet";

interface Props {
  data: Activity;
}
const ConfirmationQRButton = ({ data }: Props) => {
  const [sheetVisible, setSheetVisible] = useState<boolean | string>("");
  const buttonHandler = () => {
    setSheetVisible("visible");
  };

  return (
    <View>
      <MainButton
        color={colors.white}
        textColor={colors.primary}
        height={40}
        title={"QR de confirmación de asistencia"}
        onPress={buttonHandler}
      />
      <Divider height={18} />
      <ConfirmationQRBottomSheet
        visible={sheetVisible === "visible"}
        setVisible={setSheetVisible}
        code={data.gid}
      />
    </View>
  );
};

export default ConfirmationQRButton;
