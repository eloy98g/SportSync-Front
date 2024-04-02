import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Divider from "../../../../components/common/Divider";
import DatePicker from "../../../../components/common/inputs/DatePicker";
import LocationPicker from "../../../../components/common/inputs/LocationPicker";
import colors from "../../../../theme/colors";
import { family } from "../../../../theme/fonts";

// Components
import SectionContainer from "../components/SectionContainer";

const Schedule = () => {
  const [location, setLocation] = useState();
  const [hour, setHour] = useState(Date.now());
  const [day, setDay] = useState(Date.now());

  const hourHandler = (e: any) => {
    const newHour = Date.parse(e);
    setHour(newHour/1000);
  };
  const dayHandler = (e: any) => {
    const newDay = Date.parse(e);
    setDay(newDay/1000);
  };
  return (
    <SectionContainer>
      <Text style={styles.title}>Lugar</Text>
      <Divider height={12} />
      <LocationPicker value={location} setValue={setLocation} />
      <Divider height={40} />
      <Text style={styles.title}>Día</Text>
      <Divider height={12} />
      <DatePicker value={day} setValue={dayHandler} placeholder="Elige día" />
      <Divider height={40} />
      <Text style={styles.title}>Hora</Text>
      <Divider height={12} />
      <DatePicker
        value={hour}
        setValue={hourHandler}
        placeholder="Elige hora"
        mode="time"
      />
    </SectionContainer>
  );
};

export default Schedule;

const styles = StyleSheet.create({
  title: {
    fontFamily: family.normal,
    fontSize: 28,
    color: colors.black,
  },
});
