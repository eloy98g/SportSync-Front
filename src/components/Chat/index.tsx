import React, { useState, useEffect, useCallback } from "react";
import { GiftedChat, IMessage, User } from "react-native-gifted-chat";
import { View } from "react-native";
import io from "socket.io-client";

// Components
import Loading from "../Status/Loading";
import Error from "../Status/Error";

// Hooks
import useStatus from "../../hooks/useStatus";
import useNavigate from "../../hooks/useNavigate";

// Methods
import mapMessages from "./methods/mapMessages";

// Services
import Api from "../../services/api";

// Theme
import colors from "../../theme/colors";
import { url } from "../../../config";
import { useSocket } from "../../services/socket/useSocket";

interface Props {
  userGid: string;
  chatId: string;
}

const Chat = ({ userGid, chatId }: Props) => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const { status, setStatus } = useStatus();
  const [error, setError] = useState("");
  const [socket, setSocket] = useState(io(url));
  const { navigateTo } = useNavigate();

  useEffect(() => {
    const newSocket = io('http://192.168.0.29:1234', {
      extraHeaders: {
        'Authorization': `Bearer ${userGid}`,
        'chat': `${chatId}`
      }
    });
    setSocket(newSocket)

    console.log('trying to connect...')
    newSocket.on('connect', () => {
      console.log('connected to server');
    });

    newSocket.on('message', (msg) => {
      setMessages((prevMessages) => GiftedChat.append(prevMessages, msg));
    });

    return () => {
      console.log('disconnecting...')
      newSocket.disconnect();
    };
  }, []);

  const getData = async () => {
    try {
      const response = await Api.chat.getMessages(chatId);
      if (response.status === "success") {
        const finalMessages = mapMessages(response.data);
        setMessages(finalMessages);
        setStatus("success");
      } else {
        setStatus("error");
        setError(response.message);
      }
    } catch (error: any) {
      setStatus("error");
      setError(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const onSend = useCallback((newMessages = []) => {
    console.log('emmiting message...', newMessages[0])
    socket.emit("message:create", "hola"); 
    setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages));
  }, []);

  const profileHandler = (data: User) => {
    const { _id } = data;
    navigateTo("Profile", { gid: _id });
  };

  if (status === "loading" || status === "idle") return <Loading />;

  if (status === "error") return <Error error={error} />;

  return (
    <GiftedChat
      renderChatEmpty={() => (
        <View style={{ flex: 1, transform: [{ rotate: "180deg" }] }}>
          <Error color={colors.primary} error={"¡Comienza la conversación!"} />
        </View>
      )}
      onPressAvatar={(data) => profileHandler(data)}
      messages={messages}
      placeholder="Escribe un mensaje..."
      onSend={(newMessages) => onSend(newMessages as never)}
      user={{
        _id: userGid,
      }}
    />
  );
};

export default Chat;
