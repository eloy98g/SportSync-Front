import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";

// Components
import BackHeader from "../../../components/BackHeader";
import Screen from "../../../components/common/Screen";
import ChatCard from "./components/ChatCard";

// Hooks
import { useAppSelector } from "../../../hooks";

// Types
import Chat from "../../../store/types/Chat";
import { PHONE } from "../../../theme/breakPoints";
import Divider from "../../../components/common/Divider";
import colors from "../../../theme/colors";

const ChatListScreen = () => {
  const chats = useAppSelector((state) => state.chat.chat);

  return (
    <Screen>
      <BackHeader title="Mensajes" />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Divider height={10} />
          {chats.map((chat: Chat, index: number) => (
            <>
              {index !== 0 && <Divider key={index} height={10} />}
              <ChatCard key={chat.gid} {...chat} />
            </>
          ))}
          <Divider height={80} />
        </ScrollView>
      </View>
    </Screen>
  );
};

export default ChatListScreen;

const styles = StyleSheet.create({
  content: {
    width: "100%",
    maxWidth: PHONE,
    paddingHorizontal: 12,
    flex: 1,
    paddingTop: 50,
  },
  divider: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
