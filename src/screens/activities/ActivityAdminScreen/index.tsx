import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";

// Components
import MainButton from "../../../components/common/buttons/MainButton";
import LineDivider from "../../../components/common/LineDivider";
import BackHeader from "../../../components/BackHeader";
import Divider from "../../../components/common/Divider";
import Screen from "../../../components/common/Screen";
import Description from "./components/Description";
import Visibility from "./components/Visibility";
import ChangeTeams from "./components/ChangeTeams";
import DeleteSection from "./components/DeleteSection";

// Hooks
import useStatus from "../../../hooks/useStatus";

// Theme
import colors from "../../../theme/colors";
import { family } from "../../../theme/fonts";

// Types
import Activity from "../../../store/types/activity/Activity";
import ACTIVITY_DETAIL_PAST from "../../../api/placeholders/ACTIVITY_DETAIL_PAST";

interface Props {
  route: {
    params: { activityGid: number };
  };
}

const ActivityAdminScreen = ({ route }: Props) => {
  const { activityGid } = route.params;

  const [activity, setActivity] = useState<Activity>({} as Activity);
  const { status, setStatus } = useStatus();
  const { status: editStatus, setStatus: setEditStatus } = useStatus();

  const finishHandler = async () => {
    // TODO: Api call for editing an activity
    setEditStatus("loading");
    setTimeout(() => {
      setEditStatus("success");
    }, 300);
  };

  useEffect(() => {
    setStatus("loading");
    try {
      // TODO: Api call for getting activity data by activityGid
      setActivity(ACTIVITY_DETAIL_PAST);
      setStatus("success");
    } catch (error) {}
  }, []);


  return (
    <Screen>
      <BackHeader title="Administrar" />
      <Divider height={80} />
      <View style={styles.content}>
        {status === "loading" || status === "idle" ? (
          <View></View>
        ) : status === "error" ? (
          <View style={styles.errorContainer}>
            <Text style={styles.error}>
              {"Error al obtener los datos de la actividad"}
            </Text>
          </View>
        ) : (
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.scroll}
          >
            <Divider height={16} />
            <Visibility data={activity} setActivity={setActivity} />
            <Divider height={16} />
            <ChangeTeams data={activity} setActivity={setActivity} />
            <Divider height={16} />
            <Description data={activity} setActivity={setActivity} />
            <Divider height={16} />
            <View style={styles.buttonWrapper}>
              <MainButton
                title="Guardar cambios"
                onPress={finishHandler}
                loading={editStatus === "loading"}
              />
            </View>
            <Divider height={12} />
            <LineDivider height={36} color={colors.lightenGrey} />
            <DeleteSection />
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
