import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

// Components
import Divider from "../common/Divider";
import Sheet from "../common/Sheet";
import ConfirmReportModal from "./ConfirmReportModal";
import Reason from "./Reason";

// Constants
import REPORT_REASONS from "../../constants/REPORT_REASONS";

// Theme
import colors from "../../theme/colors";
import { family } from "../../theme/fonts";

interface Props {
  open: boolean;
  setOpen: (T: any) => void;
  userGid: number;
}

const ReportSheet = ({ open, setOpen, userGid }: Props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selection, setSelection] = useState<number | null>(null);

  const reasonHandler = (reasonGid: number) => {
    setSelection(reasonGid);
    setModalVisible(true);
  };

  const reportHandler = async () => {
    // TODO: api call for reports
    setModalVisible(false);
    setOpen(false);
  };

  return (
    <Sheet open={open} openHandler={setOpen} height={200}>
      <View style={styles.container}>
        {REPORT_REASONS.map((item) => (
          <React.Fragment key={item.gid}>
            <Reason {...item} onPress={() => reasonHandler(item.gid)} />
            <Divider height={20} />
          </React.Fragment>
        ))}
        <ConfirmReportModal
          onFinish={reportHandler}
          visible={modalVisible}
          setVisible={setModalVisible}
        />
      </View>
    </Sheet>
  );
};

export default ReportSheet;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingTop: 12,
  },
  title: {
    fontFamily: family.bold,
    color: colors.black,
    fontSize: 16,
  },
  subtitle: {
    fontFamily: family.normal,
    color: colors.black,
    fontSize: 14,
  },
});
