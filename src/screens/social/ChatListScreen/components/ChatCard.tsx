import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

// Components
import Divider from "../../../../components/common/Divider";

// Hooks
import useNavigate from "../../../../hooks/useNavigate";

// Types
import ChatType from "../../../../store/types/chat/Chat";

// Theme
import colors from "../../../../theme/colors";
import { family } from "../../../../theme/fonts";

// Utils
import getTextByDate from "../../../../utils/date/getTextByDate";
import PROFILE_IMAGE from "../../../../constants/PROFILE_IMAGE";
import LetterImage from "../../../../components/social/LetterImage";

interface Props {
  data: ChatType;
}

const ChatCard = ({ data }: Props) => {
  const { image, name, lastMessage, gid } = data;
  const { navigateTo } = useNavigate();
  const date = getTextByDate(lastMessage?.createdAt || 0);

  const chatHandler = () => {
    navigateTo("Chat", { chatId: gid, chatName: name });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={chatHandler}>
      {image ? (
        <Image style={styles.image} source={{ uri: image || PROFILE_IMAGE }} />
      ) : (
        <LetterImage name={name} />
      )}
      <View style={styles.content}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.time}>{date}</Text>
        </View>
        <Divider height={8} />
        <Text style={styles.message}>{lastMessage?.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChatCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    resizeMode: "cover",
  },
  content: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    paddingVertical: 4,
    paddingLeft: 10,
  },
  title: {
    fontFamily: family.bold,
    fontSize: 14,
    color: colors.black,
  },
  titleWrapper: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  message: {
    fontFamily: family.light,
    fontSize: 14,
    color: colors.black,
  },
  time: {
    fontFamily: family.semibold,
    fontSize: 12,
    color: colors.black,
  },
});
