import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";

// Components
import Divider from "../common/Divider";
import Sheet from "../common/Sheet";
import ConfirmReportModal from "./ConfirmReportModal";
import Reason from "./Reason";
import Loading from "../Status/Loading";
import Error from "../Status/Error";

// Hooks
import useStatus from "../../hooks/useStatus";
import { useAppSelector } from "../../hooks";

// Services
import Api from "../../services/api";

// Theme
import colors from "../../theme/colors";
import { family } from "../../theme/fonts";

interface Props {
  open: boolean;
  setOpen: (T: boolean) => void;
  userGid: string;
}

export interface ReportReason {
  gid: string;
  detail: string;
}

export interface Report {
  reportReason: string;
  reportedBy: string;
  userGid: string;
}

const ReportSheet = ({ open, setOpen, userGid }: Props) => {
  const { status, setStatus } = useStatus();
  const [error, setError] = useState("");
  const [reportReasons, setReportReasons] = useState<ReportReason[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [report, setReport] = useState<Report | null>(null);

  const currentUser = useAppSelector((state) => state.user.user.gid);

  const finishHandler = () => {
    setOpen(false);
    setModalVisible(false);
  };

  const getData = async () => {
    setStatus("loading");
    try {
      const response = await Api.report.getReportReasons();
      const { data, message, status } = response;
      if (status === "success") {
        setReportReasons(data);
        setStatus("success");
      } else {
        setError(message);
        setStatus("error");
      }
    } catch (error: any) {
      setError(error.message);
      setStatus("error");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const reasonHandler = async (reasonGid: string) => {
    const report: Report = {
      userGid,
      reportedBy: currentUser,
      reportReason: reasonGid,
    };
    setReport(report);
    setModalVisible(true);
  };

  return (
    <Sheet open={open} openHandler={setOpen} modal>
      <View style={styles.container}>
        {status === "loading" ? (
          <Loading />
        ) : status === "error" ? (
          <Error error={error} />
        ) : (
          reportReasons.map((item) => (
            <React.Fragment key={item.gid}>
              <Reason data={item} onPress={() => reasonHandler(item.gid)} />
              <Divider height={20} />
            </React.Fragment>
          ))
        )}
        <ConfirmReportModal
          report={report}
          visible={modalVisible}
          setVisible={setModalVisible}
          onFinish={finishHandler}
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
