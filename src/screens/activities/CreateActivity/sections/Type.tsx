import React, { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Divider from "../../../../components/common/Divider";
import Switch from "../../../../components/common/inputs/Switch";
import Label from "../../../../components/common/Label";

// Components
import SectionContainer from "../components/SectionContainer";
import TypeSelector from "../components/TypeSelector";
import CreateContext from "../context/CreateContext";
import Row from "./Resume/Row";

const Type = () => {
  const { draft, setDraft } = useContext(CreateContext);
  const { visibility, type, access } = draft;
  const visibilityHandler = () => {
    setDraft((prevState) => ({
      ...prevState,
      visibility: prevState.visibility === "private" ? "public" : "private",
    }));
  };

  const competiitveHandler = () => {
    setDraft((prevState) => ({
      ...prevState,
      type: prevState.type === "normal" ? "competitive" : "normal",
    }));
  };

  const accessHandler = () => {
    setDraft((prevState) => ({
      ...prevState,
      access: prevState.access === "open" ? "closed" : "open",
    }));
  };

  return (
    <SectionContainer>
      <View style={styles.container}>
        <Label text="Acceso"/>
        <Divider height={6} />
        <Row>
          <TypeSelector
            title={"Pública"}
            description={"Las actividades será abierta a cualquier usuario"}
            selected={visibility === "public"}
            onPress={visibilityHandler}
          />
          <Divider width={24} />
          <TypeSelector
            title={"Privada"}
            description={
              "Sólo será accesible a usuarios con código o invitación"
            }
            selected={visibility === "private"}
            onPress={visibilityHandler}
          />
        </Row>
        <Divider height={24} />
        <Label text="Tipo de partido o actividad"/>
        <Divider height={6} />
        <Row>
          <TypeSelector
            title={"Normal"}
            description={"El resultado no influirá en las puntuación personal."}
            selected={type === "normal"}
            onPress={competiitveHandler}
          />
          <Divider width={24} />
          <TypeSelector
            title={"Competitiva"}
            description={
              "Las actividades competitivas influyen en el nivel de los oponentes y en la puntuación personal."
            }
            selected={type === "competitive"}
            onPress={competiitveHandler}
          />
        </Row>
        <Divider height={24} />
        <Label text="Acceso"/>
        <Divider height={6} />
        <Row>
          <TypeSelector
            title={"Abierta"}
            description={
              "Los usuarios se unirán sin necesidad de aprobación por parte del administrador "
            }
            selected={access === "open"}
            onPress={competiitveHandler}
          />
          <Divider width={24} />
          <TypeSelector
            title={"Cerrada"}
            description={
              "Cuando un usuario quiera unirse, te llegará una notificación y podrás adminitirlo o no"
            }
            selected={access === "closed"}
            onPress={accessHandler}
          />
        </Row>
      </View>
    </SectionContainer>
  );
};

export default Type;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
});
