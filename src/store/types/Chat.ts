import Message from "./Message";

export type ChatType = "activity" | "private";

type Chat = {
  gid: number;
  name: string;
  dateStart: number;
  dateEnd: number;
  image: string;
  type: ChatType;
  lastMessage: Message;
};

export default Chat;
