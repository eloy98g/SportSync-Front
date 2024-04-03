import { ActivityAccess, ActivityType } from "../activity/Activity";
import Location from "../location/Location";

type Draft = {
  sport: number;
  teams: number;
  playersPerTeam: number;
  access: ActivityAccess;
  type: ActivityType;
  price: number;
  place: Location;
  hour: number;
  day: number;
  duration: number;
  description: string;
};

export default Draft;
