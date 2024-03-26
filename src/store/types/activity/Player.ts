type Player = {
  gid: number;
  name: string;
  image: string;
};

const EMPTY_PLAYER: Player = {
  gid: 0,
  name: "",
  image: "",
};

export { EMPTY_PLAYER };
export default Player;
