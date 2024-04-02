import { ActivityAccess, ActivityType } from "../activity/Activity";
import Place from "../Place";

type Draft = {
  sport: number;
  teams: number;
  playersPerTeam: number;
  access: ActivityAccess;
  type: ActivityType;
  price: number;
  place: Place;
  hour: number;
  day: number;
  duration: number;
};

export default Draft;
