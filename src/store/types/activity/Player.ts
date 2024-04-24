type Player = {
  gid: number;
  name: string;
  image: string;
  verified?: boolean;
};

const EMPTY_PLAYER: Player = {
  gid: 0,
  name: "",
  image: "",
};

export { EMPTY_PLAYER };
export default Player;
