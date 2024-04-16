import React from "react";
import { useNavigation } from "@react-navigation/native";

// Components
import TouchableInfo from "../../ActivityDetail/components/TouchableInfoContainer/TouchableInfo";
import Divider from "../../../../components/common/Divider";
import Icon from "../../../../components/common/Icon";
import Label from "../../../../components/common/Label";

// Types
import Activity from "../../../../store/types/activity/Activity";
import Player from "../../../../store/types/activity/Player";

// Theme
import colors from "../../../../theme/colors";

interface Props {
  data: Activity;
  requests: Player[];
}

const Requests = ({ data, requests }: Props) => {
  const navigation = useNavigation();
  const requestsText =
    "(" +
    requests.length +
    ") " +
    (requests.length > 1 ? "Peticiones" : "Petición");

  const requestsHandler = () => {
    navigation.navigate(
      "RequestListScreen" as never,
      {
        activityGid: data.gid,
      } as never
    );
  };

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
