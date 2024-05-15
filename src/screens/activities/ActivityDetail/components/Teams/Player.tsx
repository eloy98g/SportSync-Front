import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { CircleFadingPlus } from "lucide-react-native";

// Components
import Divider from "../../../../../components/common/Divider";
import ActionSheet from "../ActionSheet";

// Theme
import colors from "../../../../../theme/colors";
import { family } from "../../../../../theme/fonts";

// Types
import PlayerT from "../../../../../store/types/activity/Player";
import Activity from "../../../../../store/types/activity/Activity";
import PROFILE_IMAGE from "../../../../../constants/PROFILE_IMAGE";
import useStatus from "../../../../../hooks/useStatus";
import Loading from "../../../../../components/Status/Loading";
import ErrorModal from "../../../../../components/modals/ErrorModal";
import MessageModal from "../../../../../components/modals/MessageModal";
import Api from "../../../../../services/api";
import { useAppSelector } from "../../../../../hooks";

interface ExtendedPlayerT extends PlayerT {
  placeholder?: boolean;
}

interface Props {
  data: ExtendedPlayerT;
  activityData: Activity;
}

const Player = ({ data, activityData }: Props) => {
  const [openSheet, setOpenSheet] = useState(false);
  const { status, setStatus } = useStatus();
  const [modal, setModal] = useState("");
  const [message, setMessage] = useState("");
  const { image, name } = data;

  const userGid = useAppSelector((state) => state.user.user.gid);

  const applyHandler = async () => {
    setStatus("loading");
    const application = {
      activityGid: activityData.gid,
      userGid: userGid,
    };
    const response = await Api.application.create(application);

    if (response.status === "success") {
      if (response.data === "automatic") {
        setMessage("Solicitud enviada correctamente");
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

  const playerHandler = () => {
    setOpenSheet(true);
  };

  if (data?.placeholder) {
    return (
      <TouchableOpacity style={styles.container} onPress={applyHandler}>
        {status === "loading" ? (
          <Loading />
        ) : (
          <CircleFadingPlus color={colors.lightenGrey} size={55} />
        )}
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
      </TouchableOpacity>
    );
  }

  return (
    <>
      <TouchableOpacity style={styles.container} onPress={playerHandler}>
        <Image style={styles.image} source={{ uri: image || PROFILE_IMAGE }} />
        <Divider height={4} />
        <Text style={styles.name}>{name}</Text>
      </TouchableOpacity>
      <ActionSheet
        user={data}
        open={openSheet}
        setOpen={setOpenSheet}
        data={activityData}
      />
    </>
  );
};

export default Player;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    height: 70,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
    overflow: "hidden",
    resizeMode: "cover",
  },
  name: {
    fontFamily: family.normal,
    fontSize: 12,
    color: colors.grey,
    overflow: "hidden",
    textAlign: "center",
    height: 14,
  },
});
