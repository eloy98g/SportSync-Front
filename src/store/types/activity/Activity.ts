import Player from "./Player";
import Result from "./Result";
import Team from "./Team";
import Location from "../location/Location";
import Sport from "../Sport";

export type ActivityType = "normal" | "competitive";
export type ActivityAccess = "public" | "private";
export type ActivityStatus =
  | "draft"
  | "pending"
  | "closed"
  | "ongoing"
  | "waitingScore"
  | "finished";

export default interface Activity {
  gid: number;
  location: Location;
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
  userTeam?: string;
  playersPerTeam: number;
  status: ActivityStatus;
  chat: number;
  result?: Result;
}
