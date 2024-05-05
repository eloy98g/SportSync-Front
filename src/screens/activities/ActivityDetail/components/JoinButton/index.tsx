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
  const [alreadyApplied, setAlreadyApplied] = useState(false);

  const alreadyJoined = isPlayer(userGid, data.teams);
  const getData = async () => {
    if (!alreadyJoined) {
      const input = "userGid=" + userGid + "&status=pending";
      const response = await Api.application.getAll(data.gid, input);
      if (response.status === "success" && response.data.length > 0) {
        setAlreadyApplied(true);
      }
    }
  };
  useEffect(() => {
    getData();
  });

  const applyHandler = async () => {
    const application = {
      activityGid: data.gid,
      userGid: userGid,
    };
    const response = await Api.application.create(application);

    if (response.status === "success") {
      if (response.data === "automatic") {
        setMessage("Solicitud enviada correctamente");
        setAlreadyApplied(true)
      } else {
        setMessage(
          "Solicitud enviada correctamente.\nEl administrador responserá en breve."
        );
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
      if (alreadyJoined) {
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

  const color = alreadyApplied
    ? colors.grey
    : alreadyJoined
    ? colors.red
    : colors.primary;
  const title = alreadyApplied
    ? "Actividad solicitada"
    : alreadyJoined
    ? "Abandonar actividad"
    : "Unirse a la actividad";

  const buttonActive = (!alreadyApplied && !alreadyJoined) || alreadyJoined;
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
          active={buttonActive}
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
