import React from "react";
import { Minus, Plus } from "lucide-react-native";
import { StyleSheet, View } from "react-native";
import Score from "../../../../store/types/activity/Score";
import ActionButton from "../../../../components/common/buttons/ActionButton";
import colors from "../../../../theme/colors";
import Team from "../../../../store/types/activity/Team";

interface Props {
  setSlotsValues: React.Dispatch<React.SetStateAction<Score[]>>;
  teams: Team[];
  slotValues: Score[]
}

const AddSlot = ({ setSlotsValues, teams, slotValues }: Props) => {
  const addActive = slotValues.length < teams.length * 3;
  const removeActive = slotValues.length > teams.length;
  const addHandler = () => {
    setSlotsValues((prev) => {
      let array = [...prev];
      const lastItem = array[array.length - 1];
      teams.map((team) => {
        const gid = Math.floor(Math.random() * 101).toString();
        array.push({
          gid,
          team: team.gid,
          points: null,
          position: lastItem.position + 1,
        });
      });
      return array;
    });
  };

  const removeHandler = () => {
    setSlotsValues((prev) => {
      if (prev.length === teams.length) {
        return prev;
      } else {
        let array = [...prev];
        const lastItem = array[array.length - 1];
        array = array.filter((slot) => slot.position !== lastItem.position);
        return array;
      }
    });
  };
  return (
    <View style={styles.container}>
      <ActionButton
        onPress={addHandler}
        icon={<Plus color={colors.white} size={32} />}
        active={addActive}
      />
      <ActionButton
        onPress={removeHandler}
        icon={<Minus color={colors.white} size={32} />}
        active={removeActive}
      />
    </View>
  );
};

export default AddSlot;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingHorizontal: 12,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
