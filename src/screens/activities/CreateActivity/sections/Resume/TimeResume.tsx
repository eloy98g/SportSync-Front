import React, { useContext } from "react";
import { Calendar, Clock, Hourglass, MapPin } from "lucide-react-native";
import { Text, StyleSheet } from "react-native";

// Components
import Divider from "../../../../../components/common/Divider";
import MapView from "../../../../../components/common/MapView";
import Card from "../../../../../components/common/Card";
import ResumeText from "./ResumeText";
import Row from "./Row";

// Context
import CreateContext from "../../context/CreateContext";

// Theme
import colors from "../../../../../theme/colors";
import { family } from "../../../../../theme/fonts";

// Utils
import getHour from "../../../../../utils/date/getHour";
import unixToDate from "../../../../../utils/date/unixToDate";

// TODO: this must be user's location
const INITIAL_REGION = {
  latitude: 36.53485636626119,
  longitude: -6.293364831231988,
  latitudeDelta: 2,
  longitudeDelta: 2,
};

const TimeResume = () => {
  const { draft } = useContext(CreateContext);
  const { hour, day, duration, place } = draft;

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
      <Divider height={12} />
      <Text style={styles.title}>{"Localización"}</Text>
      <Divider height={6} />
      {place.address && (
        <>
          <Row>
            <MapPin size={18} color={colors.black} />
            <Divider width={12} />
            <ResumeText text={place.address} />
          </Row>
          <Divider height={12} />
        </>
      )}
      <MapView location={INITIAL_REGION} />
    </Card>
  );
};

export default TimeResume;

const styles = StyleSheet.create({
  title: {
    fontFamily: family.light,
    fontSize: 14,
    color: colors.grey,
  },
});
