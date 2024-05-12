import getChats from "./calls/getChats";
import getMessages from "./calls/getMessages";

export class Chat {
  static async getChats(userGid: string) {
    return getChats(userGid);
  }
  static async getMessages(chatGid: string) {
    return getMessages(chatGid);
  }
}
