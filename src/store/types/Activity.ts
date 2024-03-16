import Place from "./Place";

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
  admin: number;
  access: ActivityAccess;
  name: string;
  description: string;
  sport: {
    gid: number;
    name: string;
    icon: string;
    color: string;
  };
  type: ActivityType;
  teams: number;
  playersPerTeam: number;
  currentPlayers: number;
  status: ActivityStatus;
  chat: number;
}
