import React, { useState, useEffect, useCallback } from "react";
import { GiftedChat, IMessage, User } from "react-native-gifted-chat";
import { View } from "react-native";

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
import useChatSocket from "../../services/socket/useChatSocket";

// Theme
import colors from "../../theme/colors";

interface Props {
  userGid: string;
  chatId: string;
}

const Chat = ({ userGid, chatId }: Props) => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const { status, setStatus } = useStatus();
  const [error, setError] = useState("");
  const { status: screenStatus, setStatus: setScreenStatus } = useStatus();
  const { socket, socketStatus, socketError } = useChatSocket(userGid, chatId);
  const { navigateTo } = useNavigate();

  useEffect(() => {
    if (socketStatus === "error") {
      setStatus("error");
      setError(socketError);
    }

    if (socketStatus === "loading" || status === "loading") {
      setScreenStatus("loading");
    }

    if (socketStatus === "success" && status === "success") {
      setScreenStatus("success");
    }
  }, [socketStatus, status]);

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
    setStatus("loading");
    getData();
  }, []);

  const onSend = useCallback(
    (newMessages = []) => {
      if (socket) {
        socket.emit("message:create", newMessages[0]);
        setMessages((prevMessages) =>
          GiftedChat.append(prevMessages, newMessages)
        );
      } else {
        console.log("error al intentar emitir mensaje");
      }
    },
    [socket]
  );

  const profileHandler = (data: User) => {
    const { _id } = data;
    navigateTo("Profile", { gid: _id });
  };

  if (screenStatus === "loading" || screenStatus === "idle") return <Loading />;

  if (screenStatus === "error") return <Error error={error} />;

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
