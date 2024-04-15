import React, { useState } from "react";

// Components
import TouchableInfo from "../../ActivityDetail/components/TouchableInfoContainer/TouchableInfo";
import Divider from "../../../../components/common/Divider";
import Icon from "../../../../components/common/Icon";
import Label from "../../../../components/common/Label";
import VisibilitySheet from "./VisibilitySheet";

// Types
import Activity from "../../../../store/types/activity/Activity";

// Theme
import colors from "../../../../theme/colors";
import Player from "../../../../store/types/activity/Player";

interface Props {
  data: Activity;
  requests: Player[];
}

const Requests = ({ data, requests }: Props) => {
  const requestsText =
    "(" +
    requests.length +
    ") " +
    (requests.length > 1 ? "Peticiones" : "Petición");

  const requestsHandler = () => {};

  return (
    <>
      <Label text="Peticiones" />
      <Divider height={8} />
      <TouchableInfo
        icon={<Icon icon={"requests"} size={24} color={colors.black} />}
        title={requestsText}
        onPress={requestsHandler}
      />
    </>
  );
};

export default Requests;
