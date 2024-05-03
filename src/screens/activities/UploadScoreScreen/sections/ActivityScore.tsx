import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import MainButton from "../../../../components/common/buttons/MainButton";
import Divider from "../../../../components/common/Divider";

// Types
import Activity from "../../../../store/types/activity/Activity";
import Teams from "../../ActivityDetail/components/Teams";
import ScoreInput from "../components/ScoreInput";
import Error from "../../../../components/Status/Error";
import getSlotValuesArray from "../methods/getSlotValuesArray";
import Score from "../../../../store/types/activity/Score";
import initialiceScore from "../methods/initialiceScore";

interface Props {
  activity: Activity;
}

const ActivityScore = ({ activity }: Props) => {
  const [slotValues, setSlotsValues] = useState<Score[]>(
    initialiceScore(activity)
  );

  const scoreHandler = () => {};

  const addScoreSlot = () => {};

  if (!activity) {
    return <Error error="Error al cargar la actividad" />;
  }

  return (
    <View>
      <Teams activity={activity} />
      <Divider height={48} />
      <ScoreInput
        teams={activity.teams}
        slotValues={slotValues}
        setSlotsValues={setSlotsValues}
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
