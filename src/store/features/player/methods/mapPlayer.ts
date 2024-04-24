import Player from "../../../types/activity/Player";

const mapPlayer = (data: any): Player => {
  const newPlayer: Player = {
    gid: data?.gid,
    name: data?.name,
    image: data?.image,
  };
  return newPlayer;
};

export default mapPlayer;
