import create from "./calls/create";
import getAll from "./calls/getAll";

export class Confirmation {
  static async getAll(input: any) {
    return getAll(input);
  }
  static async create(input: any) {
    return create(input);
  }
}
