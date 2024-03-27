import React, { useState, ReactElement } from "react";

// Components
import Screen from "../../../components/common/Screen";

// Sections
import Description from "./sections/Description";
import Location from "./sections/Location";
import Players from "./sections/Players";
import Price from "./sections/Price";
import Resume from "./sections/Resume";
import Sport from "./sections/Sport";
import Time from "./sections/Time";
import Type from "./sections/Type";

// Types
import { CreateSection } from "../../../store/types/sections/CreateSection";

const CreateActivity = () => {
  const [section, setSection] = useState<CreateSection>("sport");

  const sectionComponent: { [key in CreateSection]: ReactElement<any, any> } = {
    sport: <Sport />,
    location: <Location />,
    description: <Description />,
    players: <Players />,
    price: <Price />,
    resume: <Resume />,
    time: <Time />,
    type: <Type />,
  };

  return <Screen>{sectionComponent[section]}</Screen>;
};

export default CreateActivity;
