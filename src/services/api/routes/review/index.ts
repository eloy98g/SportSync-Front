import create from "./calls/create";

export class Review {
  static async create(review: any) {
    return create(review);
  }
}
