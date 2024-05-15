import { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";

interface Props {
  endpoint: string;
  gid: string;
}
export function useSocket({ endpoint, gid }: Props) {
  const socket = socketIOClient(endpoint);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    function onConnect() {
      console.log("connected");
      setIsConnected(true);
    }

    function onDisconnect() {
      console.log("disconnected");
      setIsConnected(false);
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
    };
  }, [gid]);
  return {
    isConnected,
    socket,
  };
}
