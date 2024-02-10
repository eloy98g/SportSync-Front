import Schedule from "./Schedule";

export default interface UserPreferences {
  userGid: number;
  activityType: number;
  schedule: Schedule[];
}
