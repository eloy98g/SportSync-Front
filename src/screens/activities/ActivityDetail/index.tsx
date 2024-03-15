import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, ActivityIndicator } from "react-native";

// Components
import TouchableInfoContainer from "./components/TouchableInfoContainer";
import Screen from "../../../components/common/Screen";
import Header from "./components/Header";

// Hooks
import { useAppSelector } from "../../../hooks";

// Theme
import colors from "../../../theme/colors";
import { PHONE } from "../../../theme/breakPoints";

// Placeholder
import ACTIVITY_DETAIL_PAST from "../../../api/placeholders/ACTIVITY_DETAIL_PAST";
import Divider from "../../../components/common/Divider";

const ActivityDetail = ({ route }: any) => {
  const userGid = useAppSelector((state) => state.user.user.gid);
  const gid = route.params?.gid;
  const [activityData, setActivityData] = useState<any>(ACTIVITY_DETAIL_PAST);
  const [status, setStatus] = useState("idle");

  const isAdmin = userGid === activityData?.admin;

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
      <Header data={activityData} isAdmin={isAdmin} />
      <View style={styles.content}>
        <ScrollView style={styles.info} showsVerticalScrollIndicator={false}>
          <Divider height={200} />
          <TouchableInfoContainer data={activityData} />
        </ScrollView>
      </View>
    </Screen>
  );
};

export default ActivityDetail;

const styles = StyleSheet.create({
  content: {
    width: "100%",
    flex: 1,
    maxWidth: PHONE,
    paddingHorizontal: 24,
    height: 1,
  },
  info: {
    width: "100%",
    height: 1,
  },
});
