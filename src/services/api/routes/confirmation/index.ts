import create from "./calls/create";
import getAll from "./calls/getAll";

export class Confirmation {
  static async getAll(activityGid: string, input?: any) {
    return getAll(activityGid, input);
  }
  static async create(input: any) {
    return create(input);
  }
}
