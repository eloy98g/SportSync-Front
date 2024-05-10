import React, { useContext, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

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
import TextInput from "../../../../components/common/inputs/TextInput";

const Schedule = () => {
  const { draft, setDraft } = useContext(CreateContext);

  const { location, duration, day, hour } = draft;

  const hourHandler = (e: any) => {
    const newHour = Date.parse(e);
    setDraft((prevState) => ({ ...prevState, hour: newHour }));
  };

  const dayHandler = (e: any) => {
    const newDay = Date.parse(e);
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
    const newDuration = e.replace(/[,.]/g, "");
    setDraft((prevState) => ({
      ...prevState,
      duration: parseInt(newDuration),
    }));
  };

  const durationText = duration > 0 ? duration.toString() : duration

  return (
    <SectionContainer>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
        <Divider height={40} />
        <Title title="Lugar" />
        <Label text="Ubicación" />
        <LocationPicker
          setValue={locationHandler}
          option="location"
          location={location}
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
        <Label text="Duración" />
        <View style={styles.durationContainer}>
          <TextInput
            value={durationText}
            placeholder={"0"}
            onChange={durationHandler}
            numeric
          />
        </View>
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
  durationContainer: {
    width: "100%",
  },
});
