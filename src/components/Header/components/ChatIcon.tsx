import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { MessageCircleMore } from "lucide-react-native";

// Theme
import colors from "../../../theme/colors";

// Hooks
import { useAppSelector } from "../../../hooks";

const ChatIcon = () => {
  const numChats = useAppSelector((state) => state.chat.chat).length;
  const chatHandler = () => {};
  return (
    <TouchableOpacity onPress={chatHandler}>
      {numChats > 1 && <View style={styles.dot} />}
      <MessageCircleMore color={colors.primary} size={25} />
    </TouchableOpacity>
  );
};

export default ChatIcon;

const styles = StyleSheet.create({
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    position: "absolute",
    top: 2,
    right: 1,
    backgroundColor: colors.red,
  },
});
