import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Components
import MainButton from "../../../../components/common/buttons/MainButton";
import Divider from "../../../../components/common/Divider";

// Hooks
import useNavigate from "../../../../hooks/useNavigate";

// Theme
import colors from "../../../../theme/colors";
import { family } from "../../../../theme/fonts";

// Types
import Player from "../../../../store/types/activity/Player";
import Api from "../../../../services/api";
import useStatus from "../../../../hooks/useStatus";
import Application from "../../../../store/types/application/Application";
import ErrorModal from "../../../../components/modals/ErrorModal";

interface Props {
  user: Player;
  request: string;
  setRequests: React.Dispatch<React.SetStateAction<Application[]>>;
}

const RequestCard = ({ user, request, setRequests }: Props) => {
  const { image, name, verified, gid } = user;
  const { status, setStatus } = useStatus();
  const [modal, setModal] = useState("");
  const [button, setButton] = useState("");
  const [error, setError] = useState("");
  const { navigateTo } = useNavigate();

  const requestHandler = async (status: string) => {
    setStatus("loading");
    setButton(status);
    try {
      const response = await Api.application.resolve(request, {
        response: status,
      });
      if (response.status === "success") {
        setRequests((prevRequests) =>
          prevRequests.filter((req) => req.gid !== request)
        );
        setStatus("success");
      } else {
        setStatus("error");
        setModal("Error");
        setError(response.message);
      }
    } catch (error: any) {
      setStatus("error");
      setModal("Error");
      setError(error.message);
    }
  };

  const profileHandler = () => {
    navigateTo("Profile", { gid: gid });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.row} onPress={profileHandler}>
        <Image style={styles.image} source={{ uri: image }} />
        <Divider width={12} />
        <Text style={styles.name}>{name}</Text>
        <Divider width={12} />
        {verified && (
          <Image
            style={styles.verified}
            source={require("../../../../assets/images/verified.png")}
          />
        )}
      </TouchableOpacity>
      <View style={styles.actions}>
        <MainButton
          title="Rechazar"
          onPress={() => requestHandler("rejected")}
          borderColor={colors.red}
          textColor={colors.red}
          color={colors.white}
          loading={status === "loading" && button === "rejected"}
          height={28}
          fontSize={12}
        />
        <Divider width={12} />
        <MainButton
          height={28}
          title="Aceptar"
          onPress={() => requestHandler("accepted")}
          color={colors.white}
          textColor={colors.primary}
          loading={status === "loading" && button === "accepted"}
          fontSize={12}
        />
      </View>
      <ErrorModal
        setVisible={setModal}
        visible={modal === "Error"}
        error={error}
      />
    </View>
  );
};

export default RequestCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: "hidden",
    resizeMode: "cover",
  },
  verified: {
    width: 18,
    height: 18,
    resizeMode: "contain",
  },
  name: {
    fontFamily: family.normal,
    fontSize: 14,
    color: colors.black,
  },
  actions: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    maxWidth: 150,
  },
});
