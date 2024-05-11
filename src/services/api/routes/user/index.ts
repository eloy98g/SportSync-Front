import getAll from "./calls/getAll";
import getById from "./calls/getById";
import update from "./calls/update";

export class User {
  static async getById(gid: string) {
    return getById(gid);
  }
  static async update(gid: string, body: any) {
    return update(gid, body);
  }
  static async getAll(params:string) {
    return getAll(params);
  }
}
