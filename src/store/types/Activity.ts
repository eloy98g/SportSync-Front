import Player from "./activity/Player";
import Result from "./activity/Result";
import Team from "./activity/Team";
import Place from "./Place";
import Sport from "./Sport";

export type ActivityType = "normal" | "competitive";
export type ActivityAccess = "public" | "private";
export type ActivityStatus =
  | "draft"
  | "pending"
  | "closed"
  | "ongoing"
  | "finished";

export default interface Activity {
  gid: number;
  place: Place;
  creationDate: number;
  startDate: number;
  duration: number;
  admin: Player;
  access: ActivityAccess;
  type: ActivityType;
  price: number;
  name: string;
  description: string;
  sport: Sport;
  teams: Team[];
  userTeam: string;
  playersPerTeam: number;
  status: ActivityStatus;
  chat: number;
  result: Result;
}
