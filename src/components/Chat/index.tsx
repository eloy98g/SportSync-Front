import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { GiftedChat, IMessage, User } from "react-native-gifted-chat";

import CHAT_1 from "../../api/placeholders/CHAT_1";

interface Props {
  userGid: number;
  chatId: number;
}

const Chat = ({ userGid, chatId }: Props) => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    // TODO: llamada a mensajes de chat por chatid
    // TODO: iniciar socket para mensajes
    setMessages(CHAT_1.messages);
  }, []);

  const onSend = useCallback((newMessages = []) => {
    setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages));
  }, []);

  const profileHandler = (data: User) => {
    const { _id } = data;
    navigation.navigate("Profile" as never, { gid: _id } as never);
  };

  return (
    <GiftedChat
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

const styles = StyleSheet.create({});
