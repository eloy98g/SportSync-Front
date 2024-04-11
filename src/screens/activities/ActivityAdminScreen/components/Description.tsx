import React from "react";
import { StyleSheet } from "react-native";

// Components
import TouchableInfo from "../../ActivityDetail/components/TouchableInfoContainer/TouchableInfo";
import Divider from "../../../../components/common/Divider";
import Icon from "../../../../components/common/Icon";
import Label from "../../../../components/common/Label";

// Types
import Activity from "../../../../store/types/activity/Activity";

// Theme
import TextArea from "../../../../components/common/inputs/TextArea";

interface Props {
  data: Activity;
  setActivity: React.Dispatch<React.SetStateAction<Activity>>;
}

const Description = ({ data, setActivity }: Props) => {
  const { description } = data;

  const descriptionHandler = (e: any) => {
    setActivity((prevState) => ({
      ...prevState,
      description: e,
    }));
  };

  return (
    <>
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
