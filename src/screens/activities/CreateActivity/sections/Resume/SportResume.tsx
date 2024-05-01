import React, { useContext } from "react";

// Components
import Card from "../../../../../components/common/Card";
import ResumeText from "./ResumeText";

// Context
import CreateContext from "../../context/CreateContext";

const SportResume = () => {
  const { sports, draft } = useContext(CreateContext);
  const { teams, playersPerTeam } = draft;

  const sportData = sports.find((sport) => sport.gid === draft.sport);
  const teamsText =
    teams > 1
      ? `${playersPerTeam} vs `.repeat(teams - 1) + `${playersPerTeam}`
      : `${playersPerTeam} participantes`;

  return (
    <Card title="Deporte">
      <ResumeText text={`${sportData?.name} (${teamsText})`} />
    </Card>
  );
};

export default SportResume;
