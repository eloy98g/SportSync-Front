import React from "react";
import { useNavigation } from "@react-navigation/native";

// Components
import Divider from "../../../../components/common/Divider";
import TouchableInfo from "../../ActivityDetail/components/TouchableInfoContainer/TouchableInfo";

interface Props {
  activityGid: number;
}

const Actions = ({ activityGid }: Props) => {
  const navigation = useNavigation();
  const chatHandler = () =>
    navigation.navigate("Chat" as never, { chatId: activityGid } as never);

  const detailHandler = () =>
    navigation.navigate(
      "ActivityDetail" as never,
      { gid: activityGid } as never
    );

  return (
    <>
      <Divider height={20} />
      <TouchableInfo title="Ver detalles" onPress={detailHandler} />
      <Divider height={20} />
      <TouchableInfo title="Chat" onPress={chatHandler} />
      <Divider height={20} />
    </>
  );
};

export default Actions;
