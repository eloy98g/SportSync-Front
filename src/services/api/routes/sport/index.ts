import favorite from "./calls/favorite";
import getAll from "./calls/getAll";
import unfavorite from "./calls/unfavorite";

export class Sport {
  static async getAll() {
    return getAll();
  }
  static async favorite(sportGid: string, userGid: string) {
    return favorite(sportGid, userGid);
  }
  static async unfavorite(sportGid: string, userGid: string) {
    return unfavorite(sportGid, userGid);
  }
}
