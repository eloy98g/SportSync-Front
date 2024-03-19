import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, ActivityIndicator } from "react-native";

// Components
import TouchableInfoContainer from "./components/TouchableInfoContainer";
import Divider from "../../../components/common/Divider";
import Screen from "../../../components/common/Screen";
import Header from "./components/Header";
import Teams from "./components/Teams";
import Result from "./components/Result";

// Hooks
import { useAppSelector } from "../../../hooks";

// Theme
import colors from "../../../theme/colors";
import { PHONE } from "../../../theme/breakPoints";

// Placeholder
import ACTIVITY_DETAIL_PAST from "../../../api/placeholders/ACTIVITY_DETAIL_PAST";
import StaticInfo from "./components/StaticInfo";
import Actions from "./components/Actions";
import isPlayer from "./methods/isPlayer";

const ActivityDetail = ({ route }: any) => {
  const userGid = useAppSelector((state) => state.user.user.gid);
  const gid = route.params?.gid;
  const [activityData, setActivityData] = useState<any>(ACTIVITY_DETAIL_PAST);
  const [status, setStatus] = useState("idle");

  const isAdmin = userGid === activityData?.admin;
  const playerView = isPlayer(userGid, activityData?.teamPlayers);

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
          <Divider height={18} />
          <Teams
            data={activityData?.teamPlayers}
            teamSize={activityData?.playersPerTeam}
            teams={activityData.teams}
            status={activityData.status}
          />
          {activityData.status === "finished" && (
            <>
              <Divider height={18} />
              <Result
                teams={activityData.teamPlayers}
                result={activityData.result}
              />
            </>
          )}
          <Divider height={6} />
          <StaticInfo data={activityData} />
          <Actions data={activityData} playerView={playerView}/>
          <Divider height={24} />
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
