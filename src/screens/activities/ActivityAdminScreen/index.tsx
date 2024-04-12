import React, { useState } from "react";
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

// Types
import Activity from "../../../store/types/activity/Activity";

// Theme
import colors from "../../../theme/colors";
import { family } from "../../../theme/fonts";

interface Props {
  route: {
    params: { data: Activity };
  };
}

const ActivityAdminScreen = ({ route }: Props) => {
  const { data } = route.params;

  const [activity, setActivity] = useState(data);
  const { status, setStatus } = useStatus();

  const finishHandler = async () => {
    // TODO: Api call for editing an activity
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
    }, 300);
  };

  return (
    <Screen>
      <BackHeader title="Administrar" />
      <Divider height={80} />
      <View style={styles.content}>
        {data ? (
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
                loading={status === "loading"}
              />
            </View>
            <Divider height={12} />
            <LineDivider height={36} color={colors.lightenGrey} />
            <DeleteSection />
            <Divider height={50} />
          </ScrollView>
        ) : (
          <View style={styles.errorContainer}>
            <Text style={styles.error}>
              {"Error al obtener los datos de la actividad"}
            </Text>
          </View>
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
