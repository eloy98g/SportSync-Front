import { ActivityAccess, ActivityType } from "../activity/Activity";

type Draft = {
  sport: number;
  teams: number;
  playersPerTeam: number;
  access: ActivityAccess;
  type: ActivityType;
  price: number;
};

export default Draft;
