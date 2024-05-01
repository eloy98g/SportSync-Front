import {
  ActivityAccess,
  ActivityType,
  ActivityVisibility,
} from "../activity/Activity";
import Location from "../location/Location";

type Draft = {
  sport: string;
  name: string;
  teams: number;
  playersPerTeam: number;
  access: ActivityAccess;
  visibility: ActivityVisibility;
  type: ActivityType;
  price: number;
  location: Location;
  hour: number;
  day: number;
  duration: number;
  description: string;
};

export default Draft;
