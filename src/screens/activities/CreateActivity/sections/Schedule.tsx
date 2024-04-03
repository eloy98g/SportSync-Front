import React, { useContext, useState } from "react";

// Components
import Divider from "../../../../components/common/Divider";
import DatePicker from "../../../../components/common/inputs/DatePicker";
import LocationPicker from "../../../../components/common/inputs/LocationPicker";
import TextArea from "../../../../components/common/inputs/TextArea";
import SectionContainer from "../components/SectionContainer";
import Title from "../components/Title";

// Context
import CreateContext from "../context/CreateContext";

const Schedule = () => {
  const { draft, setDraft } = useContext(CreateContext);

  const { place, duration, day, hour } = draft;
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

  const locationHandler = (lat: number, lng: number) => {
    setDraft((prevState) => ({
      ...prevState,
      place: { ...prevState.place, lat, lng },
    }));
  };

  const addressHandler = (e: any) => {
    setDraft((prevState) => ({
      ...prevState,
      place: { ...prevState.place, address: e },
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
      <Title title="Lugar" />
      <Divider height={12} />
      <LocationPicker value={{ ...place }} setValue={locationHandler} />
      <Divider height={12} />
      <TextArea
        placeholder="Añadir indicación extra"
        value={place.address}
        onChange={addressHandler}
      />
      <Divider height={40} />
      <Title title="Día" />
      <Divider height={12} />
      <DatePicker value={day} setValue={dayHandler} placeholder="Elige día" />
      <Divider height={40} />
      <Title title="Hora Inicio" />
      <Divider height={12} />
      <DatePicker
        value={hour}
        setValue={hourHandler}
        placeholder="Elige hora de inicio"
        mode="time"
      />
      <Divider height={12} />
      <Title title="Hora Fin" />
      <Divider height={12} />
      <DatePicker
        value={finishHour}
        setValue={durationHandler}
        placeholder="Elige hora de finalización"
        mode="time"
      />
    </SectionContainer>
  );
};

export default Schedule;
