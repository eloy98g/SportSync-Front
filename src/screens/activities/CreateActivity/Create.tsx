import React, { useContext, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Components
import ErrorModal from "../../../components/modals/ErrorModal";
import StatusBar from "./components/StatusBar";
import Actions from "./components/Actions";
import Loading from "./components/Loading";
import ConfirmModal from "./components/ConfirmModal";
import Error from "../../../components/Status/Error";
import BackScreen from "./components/BackScreen";

// Context
import CreateContext from "./context/CreateContext";

// Hooks
import useNavigate from "../../../hooks/useNavigate";
import { useAppSelector } from "../../../hooks";

// Services
import Api from "../../../services/api";

// Sections
import Sections, { lastSection, SectionName } from "./sections";

// Theme
import colors from "../../../theme/colors";

const Create = () => {
  const [modal, setModal] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [finishError, setFinishError] = useState<string>("");
  const [finishSuccess, setFinishSuccess] = useState<boolean>(false);
  const { navigateTo } = useNavigate();
  const navigation = useNavigation();

  const { status, error, section, setSection, draft } =
    useContext(CreateContext);
  const userGid = useAppSelector((state) => state.user.user.gid);

  const currentSection =
    Sections.find((element) => element.name === section) ?? Sections[0];

  const { position, component } = currentSection;
  const value = ((position + 1) / Sections.length) * 100;

  const leftTitle = currentSection.position === 0 ? "Cancelar" : "Atrás";
  const rightTitle =
    currentSection.position === lastSection.position ? "Finalizar" : "Aceptar";

  const leftAction = () => {
    if (currentSection.position === 0) {
      navigation.goBack();
    } else {
      const prevSection =
        Sections.find(
          (element) => element.position === currentSection.position - 1
        ) ?? Sections[0];
      setSection(prevSection.name as SectionName);
    }
  };

  const createDateStart = () => {
    const dateHour = new Date(draft.hour);
    const hours = dateHour.getHours();
    const minutes = dateHour.getMinutes();

    const dateDay = new Date(draft.day);
    const day = dateDay.getDate();
    const month = dateDay.getMonth();
    const year = dateDay.getFullYear();

    const newDate = new Date(year, month, day, hours, minutes);

    const newUnixTime = newDate.getTime();
    return newUnixTime;
  };
  const finishHandler = async () => {
    setLoading(true);
    try {
      const activity = {
        userGid,
        ...draft,
        lat: draft.location.latitude,
        lng: draft.location.longitude,
        address: draft.location.address,
        dateStart: createDateStart(),
      };
      const response = await Api.activity.create(activity);
      if (response.status === "success") {
        navigateTo("ActivityDetail", {
          gid: response.data.gid,
        });
        setFinishSuccess(true);
      } else {
        setFinishError(response.message);
        setModal("Error");
      }
    } catch (error: any) {
      setFinishError(error.message);
      setModal("Error");
    } finally {
      setLoading(false);
    }
  };

  const rightAction = () => {
    if (currentSection.position === lastSection.position) {
      setModal("Confirm");
    } else {
      const nextSection =
        Sections.find(
          (element) => element.position === currentSection.position + 1
        ) ?? Sections[0];
      setSection(nextSection.name as SectionName);
    }
  };

  if (status === "loading" || status === "idle") {
    return <Loading />;
  }

  if (status === "error") {
    return <Error error={error} />;
  }

  if (finishSuccess) {
    return <BackScreen />;
  }

  return (
    <View style={styles.container}>
      <StatusBar value={value} position={position + 1} max={Sections.length} />
      {component}
      <Actions
        leftAction={leftAction}
        rightAction={rightAction}
        leftTitle={leftTitle}
        rightTitle={rightTitle}
      />
      <ConfirmModal
        visible={modal === "Confirm"}
        setVisible={setModal}
        onFinish={finishHandler}
        loading={loading}
      />
      <ErrorModal
        visible={modal === "Error"}
        setVisible={setModal}
        error={finishError}
      />
    </View>
  );
};

export default Create;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    paddingHorizontal: 16,
    paddingTop: 50,
    backgroundColor: colors.white,
  },
});
