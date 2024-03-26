import React, { useState, useEffect } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { ScrollView } from "react-native-virtualized-view";

// Components
import TouchableInfoContainer from "./components/TouchableInfoContainer";
import Divider from "../../../components/common/Divider";
import Screen from "../../../components/common/Screen";
import StaticInfo from "./components/StaticInfo";
import Actions from "./components/Actions";
import JoinButton from "./components/JoinButton";
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

// Methods
import isPlayer from "./methods/isPlayer";

// Types
import Activity from "../../../store/types/activity/Activity";

// Store
import mapActivity from "../../../store/features/activity/methods/mapActivity";

const ActivityDetail = ({ route }: any) => {
  const userGid = useAppSelector((state) => state.user.user.gid);
  const gid = route.params?.gid;
  const [activityData, setActivityData] = useState<Activity>(
    mapActivity(ACTIVITY_DETAIL_PAST)
  );
  const [status, setStatus] = useState("idle");
  const [isAdmin, setIsAdmin] = useState(false);
  const [playerView, setPlayerView] = useState(false);

  useEffect(() => {
    setIsAdmin(userGid === activityData.admin.gid);
    setPlayerView(isPlayer(userGid, activityData.teams));
  }, [userGid]);

  useEffect(() => {
    setStatus("loading");
    if (gid) {
      // TODO: Lógica para traerse los datos de una actividad
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
      <Header data={activityData} isAdmin={isAdmin} playerView={playerView} />
      <View style={styles.content}>
        <ScrollView style={styles.info} showsVerticalScrollIndicator={false}>
          <Divider height={200} />
          <JoinButton data={activityData} />
          <TouchableInfoContainer data={activityData} />
          <Divider height={18} />
          <Teams
            activity={activityData}
          />
          {activityData.status === "finished" && (
            <>
              <Divider height={18} />
              <Result
                teams={activityData.teams}
                result={activityData.result}
              />
            </>
          )}
          <Divider height={6} />
          <StaticInfo data={activityData} />
          <Actions
            data={activityData}
            playerView={playerView}
            userGid={userGid}
          />
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
