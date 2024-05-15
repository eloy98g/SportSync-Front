import io from "socket.io-client";
import { url } from "../../../config";
import { IMessage } from "react-native-gifted-chat";

let socket: any;

const currentUrl = "http://localhost:1234"
export const initiateMessageSocket = async (gid: string) => {
  console.log("initiateMessageSocket");
  try {
    if (gid !== null && gid !== undefined && gid !== "") {
      socket = io(`${currentUrl}`, {
        transports: ["websocket"],
        path: "/sockets",
        query: {
          gid: gid,
        },
        reconnectionAttempts: 15,
      });

      console.log('socket',socket)
      onSocketConnect(socket);
      onSocketError(socket);
      return true;
    }
  } catch (error) {
    console.error("error", error);
    return false
  }
};

export const onSocketConnect = (socket: any) => {
  console.log("onSocketConnect");
  socket.on("connect", () => {
    console.log("connected");
  });
};

export const onSocketError = (socket: any) => {
  socket.on("connect_error", (err: any) => {
    console.log("socket error", err);
  });
};

export const socketDisconnect = () => {
  socket?.disconnect();
};

export const createMessage = (message: IMessage) => {
  console.log("createMessage", message);
  socket.emit("message:create", message);
};
