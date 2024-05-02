import create from "./calls/create";
import getAll from "./calls/getAll";
import resolve from "./calls/resolve";

export class Application {
  static async getAll(activityGid: string) {
    return getAll(activityGid);
  }
  static async create(input: string) {
    return create(input);
  }
  static async resolve(activityGid: string, body: any) {
    return resolve(activityGid, body);
  }
}
