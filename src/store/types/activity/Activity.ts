import Location from "../location/Location";
import Player from "./Player";
import Result from "./Result";
import Team from "./Team";
import Sport from "../Sport";
import Score from "./Score";

export type ActivityType = "normal" | "competitive";
export type ActivityAccess = "open" | "closed";
export type ActivityVisibility = "public" | "private";
export type ActivityStatus =
  | "draft"
  | "pending"
  | "closed"
  | "ongoing"
  | "waitingScore"
  | "finished";

export default interface Activity {
  gid: string;
  location: Location;
  creationDate: number;
  startDate: number;
  duration: number;
  admin: Player;
  access: ActivityAccess;
  visibility: ActivityVisibility;
  type: ActivityType;
  price: number;
  name: string;
  description: string;
  sport: Sport;
  teams: Team[];
  playersPerTeam: number;
  status: ActivityStatus;
  chat: number;
  result: Score[];
  code: string;
}
