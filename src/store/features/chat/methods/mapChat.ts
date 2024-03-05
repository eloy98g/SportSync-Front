import Chat from "../../../types/Chat";

const mapChat = (data: any): Chat => {
  const newChat: Chat = {
    gid: data.gid || null,
    name: data.name || null,
    dateStart: data.dateStart || null,
    dateEnd: data.dateEnd || null,
    image: data.image || null,
    type: data.type || null,
    lastMessage: data.lastMessage || null,
  };
  return newChat;
};

export default mapChat;
