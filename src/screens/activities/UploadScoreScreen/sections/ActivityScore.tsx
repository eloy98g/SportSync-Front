import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MainButton from "../../../../components/common/buttons/MainButton";
import Divider from "../../../../components/common/Divider";

// Types
import Activity from "../../../../store/types/activity/Activity";
import Teams from "../../ActivityDetail/components/Teams";
import ScoreInput from "../components/ScoreInput";

interface Props {
  activity: Activity | undefined;
}
const ActivityScore = ({ activity }: Props) => {
  const scoreHandler = () => {};
  if (!activity) {
    return (
      <View>
        <Text style={styles.error}>Error al cargar la actividad</Text>
      </View>
    );
  }
  return (
    <View>
      <Teams activity={activity} />
      <Divider height={48} />
      <ScoreInput
        teams={activity.teams}
        sportGid={activity.sport.gid}
        activityGid={activity.gid}
      />
      <Divider height={48} />
      <View style={styles.buttonWrapper}>
        <MainButton title="Aceptar" onPress={scoreHandler} />
      </View>
    </View>
  );
};

export default ActivityScore;

const styles = StyleSheet.create({
  error: {},
  buttonWrapper: {
    width: "100%",
    height: 46,
  },
});
