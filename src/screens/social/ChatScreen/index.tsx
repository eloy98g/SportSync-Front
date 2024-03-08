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

const ChatScreen = ({ route }) => {
  const userGid = useAppSelector((state) => state.user.user.gid);
  // const chatId = route.params?.chatId;

  return (
    <Screen>
      <BackHeader title="Chat" />
      <View style={styles.content}>
        <Chat userGid={userGid || 0} chatId={1} />
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
