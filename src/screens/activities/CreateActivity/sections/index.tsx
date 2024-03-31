import React from "react";
import Description from "./Description";
import Location from "./Location";
import Players from "./Players";
import Price from "./Price";
import Resume from "./Resume";
import Sport from "./Sport";
import Time from "./Time";
import Type from "./Type";

type SectionName =
  | "sport"
  | "players"
  | "type"
  | "location"
  | "price"
  | "time"
  | "description"
  | "resume";

type Section = { name: string; position: number; component: React.JSX.Element };

const Sections: Section[] = [
  { name: "sport", position: 0, component: <Sport /> },
  { name: "players", position: 1, component: <Players /> },
  { name: "type", position: 2, component: <Type /> },
  { name: "location", position: 3, component: <Location /> },
  { name: "price", position: 4, component: <Price /> },
  { name: "time", position: 5, component: <Time /> },
  { name: "description", position: 6, component: <Description /> },
  { name: "resume", position: 7, component: <Resume /> },
];

const lastSection = Sections.reduce((prevItem, currentItem) => {
  return currentItem.position > prevItem.position ? currentItem : prevItem;
});

export { SectionName, lastSection };
export default Sections;
