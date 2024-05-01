import React from "react";
import { StyleSheet } from "react-native";

// Components
import TextArea from "../../../../components/common/inputs/TextArea";
import Divider from "../../../../components/common/Divider";
import Label from "../../../../components/common/Label";

// Types
import Activity from "../../../../store/types/activity/Activity";
import TextInput from "../../../../components/common/inputs/TextInput";

interface Props {
  data: Activity;
  setActivity: React.Dispatch<React.SetStateAction<Activity>>;
}

const Description = ({ data, setActivity }: Props) => {
  const { description, name } = data;

  const descriptionHandler = (e: any) => {
    setActivity((prevState) => ({
      ...prevState,
      description: e,
    }));
  };

  const nameHandler = (e: any) => {
    setActivity((prevState) => ({
      ...prevState,
      name: e,
    }));
  };

  return (
    <>
      <Label text="Nombre" />
      <Divider height={8} />
      <TextInput
        placeholder="Nombre de la actividad"
        value={name}
        onChange={nameHandler}
      />
      <Divider height={16} />
      <Label text="Descripción" />
      <Divider height={8} />
      <TextArea
        placeholder="Descrición"
        value={description}
        onChange={descriptionHandler}
        height={300}
      />
    </>
  );
};

export default Description;

const styles = StyleSheet.create({});
