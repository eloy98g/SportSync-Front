import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  ActivityIndicator,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";

// Components
import LineDivider from "../../../components/common/LineDivider";
import BackHeader from "../../../components/BackHeader";
import Divider from "../../../components/common/Divider";
import Screen from "../../../components/common/Screen";
import Description from "./components/Description";
import Visibility from "./components/Visibility";
import ChangeTeams from "./components/ChangeTeams";
import DeleteSection from "./components/DeleteSection";
import Access from "./components/Access";
import Requests from "./components/Requests";
import ConfirmButton from "./components/ConfirmButton";

// Hooks
import useStatus from "../../../hooks/useStatus";

// Services
import Api from "../../../services/api";

// Store

// Theme
import colors from "../../../theme/colors";
import { family } from "../../../theme/fonts";

// Types
import Activity from "../../../store/types/activity/Activity";
import mapActivity from "../../../store/types/activity/utils/mapActivity";
import Player from "../../../store/types/activity/Player";

interface Props {
  route: {
    params: { activityGid: string };
  };
}

const ActivityAdminScreen = ({ route }: Props) => {
  const { activityGid } = route.params;

  const [activity, setActivity] = useState<Activity>({} as Activity);
  const [requests, setRequests] = useState<Player[]>([]);
  const [error, setError] = useState("");
  const { status, setStatus } = useStatus();

  const getData = async () => {
    try {
      setStatus("loading");
      if (activityGid) {
        const response = await Api.activity.getById(activityGid);
        const requestResponse = await Api.application.getAll(activityGid);
        if (
          response.status === "success" &&
          requestResponse.status === "success"
        ) {
          setRequests(requestResponse.data)
          setActivity(mapActivity(response.data));
          setStatus("success");
        } else {
          setStatus("error");
          setError(response.message || requestResponse.message);
        }
      } else {
        setError("No se ha encontrado la actividad");
        setStatus("error");
      }
    } catch (error: any) {
      setStatus("error");
      setError(error.message);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getData();
    }, [])
  );

  return (
    <Screen>
      <BackHeader title="Administrar" />
      <Divider height={80} />
      <View style={styles.content}>
        {status === "loading" || status === "idle" ? (
          <View style={styles.errorContainer}>
            <ActivityIndicator size="small" color={colors.primary} />
          </View>
        ) : status === "error" ? (
          <View style={styles.errorContainer}>
            <Text style={styles.error}>{error}</Text>
          </View>
        ) : (
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.scroll}
          >
            <Requests data={activity} requests={requests} />
            <Divider height={16} />
            <Visibility data={activity} setActivity={setActivity} />
            <Divider height={16} />
            <Access data={activity} setActivity={setActivity} />
            <Divider height={16} />
            <ChangeTeams data={activity} setActivity={setActivity} />
            <Divider height={16} />
            <Description data={activity} setActivity={setActivity} />
            <Divider height={16} />
            <ConfirmButton activity={activity} />
            <Divider height={12} />
            <LineDivider height={36} color={colors.lightenGrey} />
            <DeleteSection activity={activity} />
            <Divider height={50} />
          </ScrollView>
        )}
      </View>
    </Screen>
  );
};

export default ActivityAdminScreen;

const styles = StyleSheet.create({
  content: {
    width: "100%",
    flex: 1,
    paddingHorizontal: 16,
  },
  scroll: {
    width: "100%",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  error: {
    fontFamily: family.normal,
    fontSize: 14,
    color: colors.red,
  },
  buttonWrapper: {
    height: 46,
    width: "100%",
  },
});
