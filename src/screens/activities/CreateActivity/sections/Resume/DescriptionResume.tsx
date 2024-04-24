import React, { useContext } from "react";
import { View } from "react-native";

// Components
import Divider from "../../../../../components/common/Divider";
import Card from "../../../../../components/common/Card";
import ResumeText from "./ResumeText";

// Context
import CreateContext from "../../context/CreateContext";

const DescriptionResume = () => {
  const { draft } = useContext(CreateContext);

  if (draft.description === "") {
    return <View />;
  }

  return (
    <Card title="Descripción">
      <Divider height={6} />
      <ResumeText text={draft.description} />
    </Card>
  );
};

export default DescriptionResume;
