import forgotPassword from "./calls/forgotPassword";
import signIn from "./calls/signIn";
import signUp from "./calls/signUp";

export class Auth {
  static async signUp(input: { email: string; password: string }) {
    return signUp(input);
  }

  static async signIn(input: { email: string; password: string }) {
    return signIn(input);
  }

  static async forgotPassword(input: string) {
    return forgotPassword(input);
  }
}
