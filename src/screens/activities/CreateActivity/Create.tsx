import React, { useContext, useState } from "react";
import { StyleSheet, View } from "react-native";

// Components
import StatusBar from "./components/StatusBar";
import Actions from "./components/Actions";
import Loading from "./components/Loading";
import ConfirmModal from "./components/ConfirmModal";

// Context
import CreateContext from "./context/CreateContext";

// Sections
import Sections, { lastSection, SectionName } from "./sections";

// Theme
import colors from "../../../theme/colors";
import { useNavigation } from "@react-navigation/native";

const Create = () => {
  const [modal, setModal] = useState("");
  const { status, section, setSection } = useContext(CreateContext);
  const navigation = useNavigation();
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

  const finishHandler = () => {
    console.log("publish");
    // TODO: API call for publishing an activity
    navigation.goBack();
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
    // TODO: render error
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
