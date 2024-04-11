import React, { useEffect, useState } from "react";
import { StyleSheet, ActivityIndicator, View } from "react-native";

// Components
import TeamNames from "../../../../components/activities/TeamNames";
import Divider from "../../../../components/common/Divider";
import Card from "../../../../components/common/Card";
import ScoreSlotsInputs from "./ScoreSlotsInputs";

// Hooks
import useStatus from "../../../../hooks/useStatus";

// Methods
import getSlotValuesArray from "../methods/getSlotValuesArray";

// Types
import TeamT from "../../../../store/types/activity/Team";

// Theme
import colors from "../../../../theme/colors";

export interface SlotInput {
  slot: number;
  value: number | null;
}

export interface Score {
  name: string;
  slots: SlotInput[];
}

interface Props {
  teams: TeamT[];
  sportGid: number;
  activityGid: number;
}

const ScoreInput = ({ teams, sportGid, activityGid }: Props) => {
  const [slotValues, setSlotsValues] = useState<Score[]>([]);

  const { status, setStatus } = useStatus();

  useEffect(() => {
    try {
      // TODO: Api call for fetching score type by sport type
      const response = 3;
      setSlotsValues(getSlotValuesArray(teams, response));
      setStatus("success");
    } catch (error) {
      setStatus("error");
    }
  }, []);

  return (
    <Card>
      {status === "loading" ? (
        <View style={styles.loading}>
          <ActivityIndicator size="small" color={colors.primary} />
        </View>
      ) : (
        <View style={styles.content}>
          <TeamNames teams={teams} />
          <Divider width={12} />
          <ScoreSlotsInputs
            slotValues={slotValues}
            setSlotsValues={setSlotsValues}
          />
        </View>
      )}
    </Card>
  );
};

export default ScoreInput;

const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    height: 180,
  },
  loading: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
