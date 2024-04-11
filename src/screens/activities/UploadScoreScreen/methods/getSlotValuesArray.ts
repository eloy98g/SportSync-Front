import Team from "../../../../store/types/activity/Team";
import { Score, SlotInput } from "../components/ScoreInput";

const getSlotValuesArray = (teams: Team[], slots: number): Score[] => {
  let array = [];
  for (let i = 0; i < teams.length; i++) {
    let slotInputs: SlotInput[] = [];
    for (let j = 0; j < slots; j++) {
      const input: SlotInput = { slot: j, value: null };
      slotInputs.push(input);
    }
    array.push({ name: teams[i].name, slots: slotInputs });
  }

  return array;
};

export default getSlotValuesArray;
