type Player = {
  gid: string;
  name: string;
  image: string;
  verified?: boolean;
};

const EMPTY_PLAYER: Player = {
  gid: "",
  name: "",
  image: "",
};

export { EMPTY_PLAYER };
export default Player;
