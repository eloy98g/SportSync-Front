import { useState, useEffect } from "react";
import io, { Socket } from "socket.io-client";
import useStatus from "../../hooks/useStatus";

const useChatSocket = (userGid: string, chatId: string) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const { status, setStatus } = useStatus();
  const [error, setError] = useState("");

  useEffect(() => {
    setStatus("loading");
    const newSocket = io("http://192.168.0.29:1234", {
      extraHeaders: {
        Authorization: `Bearer ${userGid}`,
        chat: `${chatId}`,
      },
    });
    setSocket(newSocket);

    newSocket.on("connect", () => {
      console.log("connected to server");
      setStatus("success");
    });

    newSocket.on("error", (err) => {
      console.log("Socket error");
      setStatus("error");
      setError(err);
    });

    return () => {
      console.log("disconnecting...");
      newSocket.disconnect();
    };
  }, [userGid, chatId]);

  return { socket, socketStatus: status, socketError: error };
};

export default useChatSocket;
