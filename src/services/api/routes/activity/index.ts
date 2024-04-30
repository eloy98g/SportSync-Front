import getAll from "./calls/getAll";

export class Activity {
  static async getAll(input: any) {
    return getAll(input);
  }
}
