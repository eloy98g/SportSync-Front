import React from "react";

// Components
import Divider from "../../../../components/common/Divider";
import TouchableInfo from "../../ActivityDetail/components/TouchableInfoContainer/TouchableInfo";
import useNavigate from "../../../../hooks/useNavigate";

interface Props {
  activityGid: string;
  activityName: string;
}

const Actions = ({ activityGid, activityName }: Props) => {
  const { navigateTo } = useNavigate();
  const chatHandler = () =>
    navigateTo("Chat", { chatId: activityGid, chatName: activityName });

  const detailHandler = () =>
    navigateTo("ActivityDetail", { gid: activityGid });

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
