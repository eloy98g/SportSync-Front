import getById from "./calls/getById";

export class User {
  static async getById(gid: string) {
    return getById(gid);
  }
}
