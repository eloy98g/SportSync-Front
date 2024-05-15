import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";

// Components
import BackHeader from "../../../components/BackHeader";
import Divider from "../../../components/common/Divider";
import Scanner from "../../../components/common/inputs/Scanner";
import Screen from "../../../components/common/Screen";

// Hooks
import { useAppSelector } from "../../../hooks";

// Placeholder
import JOIN_CONFIRMATION from "../../../api/placeholders/JOIN_CONFIRMATION";

// States
import CodeError from "./states/CodeError";
import CodeSuccess from "./states/CodeSuccess";
import Loading from "./states/Loading";

// Theme
import colors from "../../../theme/colors";
import useStatus from "../../../hooks/useStatus";

// Types
import Activity from "../../../store/types/activity/Activity";
import mapActivity from "../../../store/types/activity/utils/mapActivity";
import Api from "../../../services/api";

type VALUE = string | null;

const CodeScanScreen = () => {
  const [value, setValue] = useState<VALUE>(null);
  const { status, setStatus } = useStatus();
  const [error, setError] = useState<string>("");
  const [activity, setActivity] = useState<Activity | null>();
  
  const userGid = useAppSelector((state) => state.user.user.gid);

  const codeHandler = (val: VALUE) => {
    setValue(val);
  };

  const confirmHandler = async () => {
    try {
      setStatus("loading");
      const response = await Api.confirmation.create({
        userGid,
        activityGid: value,
      });

      if (response.status === "success") {
        const activityData = mapActivity(response.data);
        setActivity(activityData);
        setStatus("success");
      } else {
        setError(response.message);
        setStatus("error");
      }
    } catch (error: any) {
      setError(error.message);
      setStatus("error");
    }
  };

  useEffect(() => {
    if (value) {
      confirmHandler();
    }
  }, [value]);

  return (
    <Screen>
      <BackHeader title="Escanear Código" />
      <Divider height={80} />
      <View style={styles.container}>
        {status === "idle" && (
          <View style={styles.content}>
            <Scanner setValue={codeHandler} />
          </View>
        )}
        {status === "loading" && <Loading />}
        {status === "success" && activity && <CodeSuccess data={activity} />}
        {status === "error" && (
          <CodeError setStatus={setStatus} error={error} />
        )}
      </View>
    </Screen>
  );
};

export default CodeScanScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.black,
  },
  content: {
    width: "100%",
    height: "100%",
  },
});
