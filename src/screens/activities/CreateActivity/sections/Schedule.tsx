import React, { useContext, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";

// Components
import LocationPicker from "../../../../components/common/inputs/LocationPicker";
import DatePicker from "../../../../components/common/inputs/DatePicker";
import TextArea from "../../../../components/common/inputs/TextArea";
import SectionContainer from "../components/SectionContainer";
import Divider from "../../../../components/common/Divider";
import Label from "../../../../components/common/Label";
import Title from "../components/Title";

// Context
import CreateContext from "../context/CreateContext";

// Types
import Location from "../../../../store/types/location/Location";

const Schedule = () => {
  const { draft, setDraft } = useContext(CreateContext);

  const { location, duration, day, hour } = draft;
  const durationUnix = duration * 60;
  const [finishHour, setFinishHour] = useState(hour + durationUnix);

  const hourHandler = (e: any) => {
    const newHour = Date.parse(e) / 1000;
    setDraft((prevState) => ({ ...prevState, hour: newHour }));
  };

  const dayHandler = (e: any) => {
    const newDay = Date.parse(e) / 1000;
    setDraft((prevState) => ({ ...prevState, day: newDay }));
  };

  const locationHandler = (coords: Location) => {
    setDraft((prevState) => ({
      ...prevState,
      location: { ...prevState.location, ...coords },
    }));
  };

  const addressHandler = (e: any) => {
    setDraft((prevState) => ({
      ...prevState,
      location: { ...prevState.location, address: e },
    }));
  };

  const durationHandler = (e: any) => {
    const newHour = Date.parse(e) / 1000;
    setFinishHour(newHour);
    const newDuration = (newHour - hour) / 60;
    setDraft((prevState) => ({ ...prevState, duration: newDuration }));
  };

  return (
    <SectionContainer>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scroll}
        contentContainerStyle={styles.content}
      >
        <Divider height={40} />
        <Title title="Lugar" />
        <Label text="Ubicación" />
        <LocationPicker
          value={{ ...location }}
          setValue={locationHandler}
          option="location"
          initialLocation={location}
        />
        <Divider height={12} />
        <Label text="Indicaciones" />
        <TextArea
          placeholder="Añadir indicación extra"
          value={location.address || ""}
          onChange={addressHandler}
        />
        <Divider height={24} />
        <Title title="Fecha" />
        <Divider height={12} />
        <Label text="Día" />
        <DatePicker value={day} setValue={dayHandler} placeholder="Elige día" />
        <Divider height={12} />
        <Label text="Hora inicio" />
        <DatePicker
          value={hour}
          setValue={hourHandler}
          placeholder="Elige hora de inicio"
          mode="time"
        />
        <Divider height={12} />
        <Label text="Hora finalización" />
        <DatePicker
          value={finishHour}
          setValue={durationHandler}
          placeholder="Elige hora de finalización"
          mode="time"
        />
      </ScrollView>
    </SectionContainer>
  );
};

export default Schedule;

const styles = StyleSheet.create({
  scroll: {
    height: 1,
    width: "100%",
  },
  content: {},
});
