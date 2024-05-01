import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, View, ActivityIndicator, Text } from "react-native";
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
import Loading from "../../../components/Status/Loading";
import Error from "../../../components/Status/Error";

// Hooks
import { useAppSelector } from "../../../hooks";

// Theme
import { PHONE } from "../../../theme/breakPoints";

// Methods
import isPlayer from "./methods/isPlayer";

// Types
import Activity from "../../../store/types/activity/Activity";

// Store
import mapActivity from "../../../store/features/activity/methods/mapActivity";
import AdminButton from "./components/AdminButton";
import Api from "../../../services/api";
import { useFocusEffect } from "@react-navigation/native";

const ActivityDetail = ({ route }: any) => {
  const userGid = useAppSelector((state) => state.user.user.gid);
  const gid = route.params?.gid;

  const [activityData, setActivityData] = useState<Activity>();
  const [error, setError] = useState("");
  const [status, setStatus] = useState("idle");
  const [isAdmin, setIsAdmin] = useState(false);
  const [playerView, setPlayerView] = useState(false);

  useEffect(() => {
    if (activityData) {
      setIsAdmin(userGid === activityData.admin.gid);
      setPlayerView(isPlayer(userGid, activityData?.teams));
    }
  }, [userGid, activityData]);

  const getData = async () => {
    setStatus("loading");
    if (gid) {
      const response = await Api.activity.getById(gid);
      if (response.status === "success") {
        setActivityData(mapActivity(response.data));
        setStatus("success");
      } else {
        setStatus("error");
        setError(response.message);
      }
    } else {
      setStatus("error");
    }
  };

  useFocusEffect(
    useCallback(() => {
      getData();
    }, [])
  );

  if (status === "loading" || status === "idle") {
    return <Loading />;
  }

  if (status === "error") {
    return <Error error={error} />;
  }

  if (status === "success" && activityData) {
    return (
      <Screen>
        <Header data={activityData} isAdmin={isAdmin} playerView={playerView} />
        <View style={styles.content}>
          <ScrollView style={styles.info} showsVerticalScrollIndicator={false}>
            <Divider height={200} />
            {!isAdmin && <JoinButton data={activityData} userGid={userGid} />}
            {isAdmin && <AdminButton data={activityData} />}
            <TouchableInfoContainer data={activityData} />
            <Divider height={18} />
            <Teams activity={activityData} />
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
  }
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
