import React from "react";
import { StyleSheet, View } from "react-native";

// Components
import TeamNames from "../../../../components/activities/TeamNames";
import Divider from "../../../../components/common/Divider";
import Card from "../../../../components/common/Card";
import ScoreSlotsInputs from "./ScoreSlotsInputs";
import AddSlot from "./AddSlot";

// Types
import TeamT from "../../../../store/types/activity/Team";

// Theme
import Score from "../../../../store/types/activity/Score";

interface Props {
  teams: TeamT[];
  slotValues: Score[];
  setSlotsValues: React.Dispatch<React.SetStateAction<Score[]>>;
}

const ScoreInput = ({ teams, slotValues, setSlotsValues }: Props) => {
  return (
    <Card>
      <View style={styles.content}>
        <TeamNames teams={teams} />
        <Divider width={12} />
        <ScoreSlotsInputs
          teams={teams}
          slotValues={slotValues}
          setSlotsValues={setSlotsValues}
        />
        <AddSlot teams={teams} slotValues={slotValues} setSlotsValues={setSlotsValues} />
      </View>
    </Card>
  );
};

export default ScoreInput;

const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    height: 180,
  },
});
