import React from "react";

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
import useNavigate from "../../../../hooks/useNavigate";

interface Props {
  data: Activity;
  requests: Player[];
}

const Requests = ({ data, requests }: Props) => {
  const { navigateTo } = useNavigate();
  const requestsText =
    "(" +
    requests.length +
    ") " +
    (requests.length > 1 ? "Solicitudes" : "Solicitud");

  const requestsHandler = () => {
    navigateTo("RequestListScreen", { activityGid: data.gid });
  };

  if (requests.length === 0) return <></>;

  return (
    <>
      <Divider height={16} />
      <Label text="Solicitudes" />
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
