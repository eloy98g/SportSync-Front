import Player from "../activity/Player";

export default interface Message {
  gid: string;
  text: string;
  user: Player;
  createdAt: number;
}
