import React, { useCallback, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Inbox } from "lucide-react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

// Theme
import colors from "../../../theme/colors";

// Hooks
import { useAppSelector } from "../../../hooks";
import Activity from "../../../store/types/activity/Activity";
import Api from "../../../services/api";
import useNavigate from "../../../hooks/useNavigate";

const RequestsIcon = () => {
  const [requests, setRequests] = useState<any>([]);
  
  const { navigateTo } = useNavigate();
  const userGid = useAppSelector((state) => state.user.user.gid);
  const currentActivities = useAppSelector(
    (state) => state.activity.currentActivities
  );

  const numRequests = requests.filter(
    (req: any) => req.requests.length > 0
  ).length;

  const getData = async () => {
    try {
      const adminActivities = currentActivities.filter(
        (activity) => activity.admin.gid === userGid
      );
      const scorePromises = adminActivities.map(async (activity: Activity) => {
        const response = await Api.application.getAll(activity.gid);
        if (response.status === "success") {
          return { activity: activity, requests: response.data };
        } else {
          throw new Error(
            `No se pudieron obtener las solicitudes de la actividad ${activity.gid}`
          );
        }
      });

      const data = await Promise.all(scorePromises);
      setRequests(data);
    } catch (error) {
      console.error("Error getting requests", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getData();
    }, [])
  );

  const requestsHandler = () => {
    navigateTo("RequestActivitiesList", { requests });
  };

  return (
    <TouchableOpacity onPress={requestsHandler}>
      {numRequests > 1 && <View style={styles.dot} />}
      <Inbox color={colors.primary} size={25} />
    </TouchableOpacity>
  );
};

export default RequestsIcon;

const styles = StyleSheet.create({
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    position: "absolute",
    top: 2,
    right: 1,
    backgroundColor: colors.red,
    zIndex: 2,
  },
});
