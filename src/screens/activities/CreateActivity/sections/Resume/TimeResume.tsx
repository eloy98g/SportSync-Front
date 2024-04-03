import React, { useContext } from "react";
import { Calendar, Clock, Hourglass } from "lucide-react-native";

// Components
import Divider from "../../../../../components/common/Divider";
import Card from "../../../../../components/common/Card";
import ResumeText from "./ResumeText";
import Row from "./Row";

// Context
import CreateContext from "../../context/CreateContext";

// Theme
import colors from "../../../../../theme/colors";

// Utils
import getHour from "../../../../../utils/date/getHour";
import unixToDate from "../../../../../utils/date/unixToDate";

const TimeResume = () => {
  const { draft } = useContext(CreateContext);
  const { hour, day, duration } = draft;

  const hourText = "Hora: " + getHour(hour);
  const dayText = "Día: " + unixToDate(day);
  const durationText = "Duración: " + duration + " min.";

  return (
    <Card title="Programada para:">
      <Divider height={6} />
      <Row>
        <Calendar size={18} color={colors.black} />
        <Divider width={12} />
        <ResumeText text={dayText} />
      </Row>
      <Divider height={12} />
      <Row>
        <Clock size={18} color={colors.black} />
        <Divider width={12} />
        <ResumeText text={hourText} />
      </Row>
      <Divider height={12} />
      <Row>
        <Hourglass size={18} color={colors.black} />
        <Divider width={12} />
        <ResumeText text={durationText} />
      </Row>
    </Card>
  );
};

export default TimeResume;
