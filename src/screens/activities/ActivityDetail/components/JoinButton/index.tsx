import React from "react";
import { View } from "react-native";

// Components
import MainButton from "../../../../../components/common/buttons/MainButton";
import Divider from "../../../../../components/common/Divider";

// Methods
import isActivityFull from "../../methods/isActivityFull";
import isPlayer from "../../methods/isPlayer";

// Theme
import colors from "../../../../../theme/colors";

// Types
import Activity from "../../../../../store/types/activity/Activity";

interface Props {
  data: Activity;
  userGid: number;
}

const JoinButton = ({ data, userGid }: Props) => {
  const buttonHandler = () => {
    if (isPlayer(userGid, data.teams)) {
      // TODO: api call for left the activity
    } else {
      // TODO: api call for joining
      // Should launch a modal with the response (if its automatic or needs approval)
    }
  };

  const color = isPlayer(userGid, data.teams) ? colors.red : colors.primary;
  const title = isPlayer(userGid, data.teams)
    ? "Abandonar actividad"
    : "Unirse a un equipo";

  if (data.status === "pending" && !isActivityFull(data)) {
    return (
      <>
        <MainButton
          color={colors.white}
          textColor={color}
          borderColor={color}
          height={40}
          title={title}
          onPress={buttonHandler}
        />
        <Divider height={18} />
      </>
    );
  }

  return <View></View>;
};

export default JoinButton;
