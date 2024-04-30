import getAll from "./calls/getAll";
import getById from "./calls/getById";

export class Activity {
  static async getAll(input: string) {
    return getAll(input);
  }
  static async getById(gid: string) {
    return getById(gid);
  }
}
