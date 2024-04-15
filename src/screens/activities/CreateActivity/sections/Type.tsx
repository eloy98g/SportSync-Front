import React, { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Divider from "../../../../components/common/Divider";
import Switch from "../../../../components/common/inputs/Switch";

// Components
import SectionContainer from "../components/SectionContainer";
import TypeSelector from "../components/TypeSelector";
import CreateContext from "../context/CreateContext";

const Type = () => {
  const { draft, setDraft } = useContext(CreateContext);
  const { visibility, type } = draft;
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

  return (
    <SectionContainer>
      <TypeSelector
        title={"Pública"}
        description={
          "Las actividades públicas son actividades abiertas a cualquier persona"
        }
        selected={visibility === "public"}
        onPress={visibilityHandler}
      />
      <Divider height={12} />
      <TypeSelector
        title={"Privada"}
        description={
          "Las actividades privadas son actividades sólo accesibles a usuarios con código o invitación"
        }
        selected={visibility === "private"}
        onPress={visibilityHandler}
      />
      <Divider height={36} />
      <TypeSelector
        title={"Normal"}
        description={
          "Las actividades normales no influirán en las puntuaciones personales, únicamente se reflejarán en el historial de actividades."
        }
        selected={type === "normal"}
        onPress={competiitveHandler}
      />
      <Divider height={12} />
      <TypeSelector
        title={"Competitiva"}
        description={
          "Las actividades competitivas influyen en el nivel de los oponentes y en la puntuación personal."
        }
        selected={type === "competitive"}
        onPress={competiitveHandler}
      />
    </SectionContainer>
  );
};

export default Type;

const styles = StyleSheet.create({});
