import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Divider from "../../../../components/common/Divider";

// Types
import Chat from "../../../../store/types/Chat";
import colors from "../../../../theme/colors";
import { family } from "../../../../theme/fonts";
import getTextByDate from "../../../../utils/date/getTextByDate";

const ChatCard = (props: Chat) => {
  const { image, name, lastMessage } = props;

  const date = getTextByDate(lastMessage?.date || 0);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.content}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.time}>{date}</Text>
        </View>
        <Divider height={8} />
        <Text style={styles.message}>{lastMessage?.content}</Text>
      </View>
    </View>
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
