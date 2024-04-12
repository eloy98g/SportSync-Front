import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

// Theme
import colors from "../../../../theme/colors";
import { Score, SlotInput } from "./ScoreInput";

interface Props {
  slotValues: Score[];
  setSlotsValues: React.Dispatch<React.SetStateAction<Score[]>>;
}

const ScoreSlotsInputs = ({ slotValues, setSlotsValues }: Props) => {
  const slotHandler = (e: string, team: string, slot: number) => {
    setSlotsValues((prevState) => {
      const updatedSlots: Score[] = prevState.map((teamSlot) => {
        if (teamSlot.name === team) {
          const updatedTeamSlots: SlotInput[] = teamSlot.slots.map((s) => {
            if (s.slot === slot) {
              return { slot: s.slot, value:  parseInt(e) || null};
            }
            return s;
          });
          return { ...teamSlot, slots: updatedTeamSlots };
        }
        return teamSlot;
      });
      return updatedSlots;
    });
  };

  return (
    <View style={styles.container}>
      {slotValues.map((team) => (
        <View style={styles.row} key={team.name}>
          {team.slots.map((slot) => (
            <TextInput
              key={slot.slot + team.name}
              style={styles.scoreInput}
              keyboardType="numeric"
              
              value={slot.value?.toString()}
              cursorColor={colors.grey}
              onChangeText={(e) => slotHandler(e, team.name, slot.slot)}
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
