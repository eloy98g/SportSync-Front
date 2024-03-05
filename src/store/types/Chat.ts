import Message from "./Message";

export type ChatType = "activity" | "private";

type Chat = {
  gid: number |null;
  name: string;
  dateStart: number |null;
  dateEnd: number |null;
  image: string;
  type: ChatType |null;
  lastMessage: Message | null;
};

export default Chat;
