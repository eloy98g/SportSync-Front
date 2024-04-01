import { ActivityAccess, ActivityType } from "../activity/Activity";

type Draft = {
  sport: number;
  teams: number;
  playersPerTeam: number;
  access: ActivityAccess;
  type: ActivityType;
};

export default Draft;
