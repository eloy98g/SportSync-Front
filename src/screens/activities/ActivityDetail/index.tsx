import React, { useState, useEffect } from "react";
import { StyleSheet, Text, ActivityIndicator } from "react-native";
import ACTIVITY_DETAIL_PAST from "../../../api/placeholders/ACTIVITY_DETAIL_PAST";

// Components
import Screen from "../../../components/common/Screen";
import { useAppSelector } from "../../../hooks";
import colors from "../../../theme/colors";
import Header from "./components/Header"

const ActivityDetail = ({ route }: any) => {
  const user = useAppSelector((state) => state.user.user);
  const gid = route.params?.gid;
  const [activityData, setActivityData] = useState<any>(ACTIVITY_DETAIL_PAST);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    setStatus("loading");
    if (gid) {
      // TODO: Lógica para traerse los datos de una actividad
      setActivityData(ACTIVITY_DETAIL_PAST);
      setStatus("success");
    } else {
      setStatus("error");
    }
  }, []);

  // Todo: generate Loading Component and remove duplicates
  if (status === "loading" || status === "idle") {
    return (
      <Screen>
        <ActivityIndicator size="small" color={colors.primary} />
      </Screen>
    );
  }

  return (
    <Screen>
      <Header />
      <Text>ActivityDetail</Text>
    </Screen>
  );
};

export default ActivityDetail;

const styles = StyleSheet.create({});
