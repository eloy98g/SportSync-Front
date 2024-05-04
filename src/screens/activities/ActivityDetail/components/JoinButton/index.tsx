import React, { useEffect, useState } from "react";
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
import useStatus from "../../../../../hooks/useStatus";
import Api from "../../../../../services/api";
import ErrorModal from "../../../../../components/modals/ErrorModal";
import MessageModal from "../../../../../components/modals/MessageModal";
import { useNavigation } from "@react-navigation/native";

interface Props {
  data: Activity;
  userGid: string;
}

const JoinButton = ({ data, userGid }: Props) => {
  const { status, setStatus } = useStatus();
  const [modal, setModal] = useState("");
  const [message, setMessage] = useState("");
  const navigation = useNavigation();

  const applyHandler = async () => {
    const application = {
      activityGid: data.gid,
      userGid: userGid,
    };
    const response = await Api.application.create(application);

    if (response.status === "success") {
      if (response.data === "automatic") {
        setMessage(
          "Solicitud enviada correctamente.\nEl administrador responserá en breve."
        );
      } else {
        setMessage("Solicitud enviada correctamente");
      }
      setStatus("success");
      setModal("Message");
    } else {
      setStatus("error");
      setModal("Error");
      setMessage(response.message);
    }
  };

  const leaveHandler = async () => {
    const body = {
      players: [userGid],
    };
    const response = await Api.activity.removePlayers(body, data.gid);

    if (response.status === "success") {
      setMessage("Has abandonado la actividad");
      setStatus("success");
      setModal("Left");
    } else {
      setStatus("error");
      setModal("Error");
      setMessage(response.message);
    }
  };

  const buttonHandler = async () => {
    try {
      setStatus("loading");
      if (isPlayer(userGid, data.teams)) {
        leaveHandler();
      } else {
        applyHandler();
      }
    } catch (error: any) {
      setStatus("error");
      setModal("Error");
      setMessage(error.message);
    }
  };

  const color = isPlayer(userGid, data.teams) ? colors.red : colors.primary;
  const title = isPlayer(userGid, data.teams)
    ? "Abandonar actividad"
    : "Unirse a la actividad";

  if (data.status === "pending" && !isActivityFull(data)) {
    return (
      <>
        <MainButton
          color={colors.white}
          textColor={color}
          borderColor={color}
          height={40}
          title={title}
          loading={status === "loading"}
          onPress={buttonHandler}
        />
        <Divider height={18} />
        <ErrorModal
          setVisible={setModal}
          visible={modal === "Error"}
          error={message}
        />
        <MessageModal
          setVisible={setModal}
          visible={modal === "Message"}
          message={message}
          onFinish={() => setModal("")}
        />
        <MessageModal
          setVisible={setModal}
          visible={modal === "Left"}
          message={message}
          onFinish={() => {
            setModal("");
            navigation.goBack();
          }}
        />
      </>
    );
  }

  return <View></View>;
};

export default JoinButton;
