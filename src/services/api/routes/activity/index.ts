import create from "./calls/create";
import remove from "./calls/remove";
import getAdministrated from "./calls/getAdministrated";
import getAll from "./calls/getAll";
import getById from "./calls/getById";
import update from "./calls/update";
import updateTeams from "./calls/updateTeams";

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

  static async remove(activityGid: string) {
    return remove(activityGid);
  }

  static async updateTeams(input: any, activityGid: string) {
    return updateTeams(input,activityGid);
  }
}
