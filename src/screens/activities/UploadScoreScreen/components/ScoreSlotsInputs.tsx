import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

// Theme
import colors from "../../../../theme/colors";
import Score from "../../../../store/types/activity/Score";
import Team from "../../../../store/types/activity/Team";
import ActionButton from "../../../../components/common/buttons/ActionButton";
import { Plus, PlusCircle } from "lucide-react-native";

interface Props {
  teams: Team[];
  slotValues: Score[];
  setSlotsValues: React.Dispatch<React.SetStateAction<Score[]>>;
}

const ScoreSlotsInputs = ({ teams, slotValues, setSlotsValues }: Props) => {
  const slotHandler = (e: string, team: string, slot: string) => {};

  return (
    <View style={styles.container}>
      {teams.map((team) => (
        <View style={styles.row} key={team.name}>
          {slotValues
            .filter((slot) => slot.team === team.gid)
            .map((slot) => (
              <TextInput
                key={slot.gid + team.name}
                style={styles.scoreInput}
                keyboardType="numeric"
                value={slot.points?.toString()}
                cursorColor={colors.grey}
                onChangeText={(e) => slotHandler(e, team.name, slot.gid)}
              />
            ))}
        </View>
      ))}
    </View>
  );
};

export default ScoreSlotsInputs;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-evenly",
    flex: 1,
    width: "100%",
  },
  scroll: {
    width: "100%",
    flex: 1,
    borderWidth: 1,
  },
  row: {
    height: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "stretch",
    marginBottom: 12,
  },
  scoreInput: {
    minWidth: 60,
    minHeight: 60,
    borderWidth: 1,
    borderColor: colors.lightenGrey,
    borderRadius: 8,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    fontSize: 24,
    display: "flex",
    color: colors.black,
    textAlign: "center",
  },
});
