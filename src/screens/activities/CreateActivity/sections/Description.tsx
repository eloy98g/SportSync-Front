import React, { useContext } from "react";
import { StyleSheet } from "react-native";

// Components
import Divider from "../../../../components/common/Divider";
import TextArea from "../../../../components/common/inputs/TextArea";
import SectionContainer from "../components/SectionContainer";
import Title from "../components/Title";

// Context
import CreateContext from "../context/CreateContext";

const Description = () => {
  const { draft, setDraft } = useContext(CreateContext);

  const descriptionHandler = (e: string) => {
    setDraft((prevState) => ({
      ...prevState,
      descripion: e,
    }));
  };

  return (
    <SectionContainer>
      <Title title="Descripción" />
      <Divider height={12} />
      <TextArea
        placeholder="Añadir información relevante"
        value={draft.description}
        onChange={descriptionHandler}
        height={300}
      />
    </SectionContainer>
  );
};

export default Description;

const styles = StyleSheet.create({});
