import create from "./calls/create";
import getAll from "./calls/getAll";
import resolve from "./calls/resolve";

export class Application {
  static async getAll(activityGid: string, input?: any) {
    return getAll(activityGid, input);
  }
  static async create(input: any) {
    return create(input);
  }
  static async resolve(gid: string, body: any) {
    return resolve(gid, body);
  }
}
