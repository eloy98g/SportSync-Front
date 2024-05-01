import create from "./calls/create";
import getAdministrated from "./calls/getAdministrated";
import getAll from "./calls/getAll";
import getById from "./calls/getById";
import update from "./calls/update";

export class Activity {
  static async getAll(input: string) {
    return getAll(input);
  }
  static async getById(gid: string) {
    return getById(gid);
  }
  static async getAdministrated(userGid: string) {
    return getAdministrated(userGid);
  }

  static async create(activity: any) {
    return create(activity);
  }

  static async update(activity: any, activityGid: string) {
    return update(activity, activityGid);
  }
}
