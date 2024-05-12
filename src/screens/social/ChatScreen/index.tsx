import React from "react";
import { StyleSheet, View } from "react-native";

// Components
import BackHeader from "../../../components/BackHeader";
import Chat from "../../../components/Chat";
import Screen from "../../../components/common/Screen";

// Hooks
import { useAppSelector } from "../../../hooks";

// Theme
import { PHONE } from "../../../theme/breakPoints";

const ChatScreen = ({ route }: any) => {
  const userGid = useAppSelector((state) => state.user.user.gid);
  const chatId = route.params?.chatId;
  const chatName = route.params?.chatName;

  const title = chatName || "Chat";

  return (
    <Screen>
      <BackHeader title={title} />
      <View style={styles.content}>
        <Chat userGid={userGid} chatId={chatId} />
      </View>
    </Screen>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  content: {
    maxWidth: PHONE,
    width: "100%",
    height: "100%",
  },
});
