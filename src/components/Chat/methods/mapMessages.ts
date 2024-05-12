import { IMessage, User } from "react-native-gifted-chat";
import Message from "../../../store/types/chat/Message";

const mapMessage = (data: any): IMessage => {
  const sender: User = {
    _id: data?.user.gid,
    name: data?.user.name,
    avatar: data?.user.image,
  };
  const newSport: IMessage = {
    _id: data?.gid,
    createdAt: data?.createdAt,
    text: data?.text,
    user: sender,
  };
  return newSport;
};

const mapMessages = (data: Message[]) =>
  data.map((message) => mapMessage(message));


export default mapMessages;
