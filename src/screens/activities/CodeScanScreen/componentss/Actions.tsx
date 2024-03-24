import React from "react";

// Components
import Divider from "../../../../components/common/Divider";
import TouchableInfo from "../../ActivityDetail/components/TouchableInfoContainer/TouchableInfo";

interface Props {
  activityGid: number;
}

const Actions = ({ activityGid }: Props) => {
  const chatHandler = () => {};
  const detailHandler = () => {};

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
