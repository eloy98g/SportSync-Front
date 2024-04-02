import React from "react";
import Description from "./Description";
import Schedule from "./Schedule";
import Players from "./Players";
import Resume from "./Resume";
import Sport from "./Sport";
import Type from "./Type";

type SectionName =
  | "sport"
  | "players"
  | "type"
  | "schedule"
  | "description"
  | "resume";

type Section = { name: string; position: number; component: React.JSX.Element };

const Sections: Section[] = [
  { name: "sport", position: 0, component: <Sport /> },
  { name: "players", position: 1, component: <Players /> },
  { name: "type", position: 2, component: <Type /> },
  { name: "schedule", position: 3, component: <Schedule /> },
  { name: "description", position: 4, component: <Description /> },
  { name: "resume", position: 5, component: <Resume /> },
];

const lastSection = Sections.reduce((prevItem, currentItem) => {
  return currentItem.position > prevItem.position ? currentItem : prevItem;
});

export { SectionName, lastSection };
export default Sections;
