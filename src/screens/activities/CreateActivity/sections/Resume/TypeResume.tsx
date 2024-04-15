import React, { useContext } from "react";

// Components
import Card from "../../../../../components/common/Card";
import Divider from "../../../../../components/common/Divider";
import Icon from "../../../../../components/common/Icon";
import ResumeText from "./ResumeText";
import Row from "./Row";

// Context
import CreateContext from "../../context/CreateContext";

// Theme
import colors from "../../../../../theme/colors";

const TypeResume = () => {
  const { draft } = useContext(CreateContext);
  const { visibility, type } = draft;

  const visibilityText =
    visibility === "private" ? "Actividad privada" : "Actividad pública";

  return (
    <Card title="Tipo">
      <Divider height={6} />
      <Row>
        <Icon icon={visibility} size={18} color={colors.black} />
        <Divider width={12} />
        <ResumeText text={visibilityText} />
      </Row>
      {type === "competitive" && (
        <>
          <Divider height={12} />
          <Row>
            <Icon icon={type} size={18} color={colors.black} />
            <Divider width={12} />
            <ResumeText text={"Actividad competitiva"} />
          </Row>
        </>
      )}
    </Card>
  );
};

export default TypeResume;
