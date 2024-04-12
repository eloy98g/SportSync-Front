import Player from "../../../types/activity/Player";
import mapPlayer from "../../player/methods/mapPlayer";

const mapFriends = (data: any): Player[] => {
  const mappedData: Player[] = data.map((player: any) => mapPlayer(player));
  return mappedData;
};

export default mapFriends;
