import Player from "../activity/Player";

export default interface Application {
  gid: string;
  status: string;
  user: Player;
}
