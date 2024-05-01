import Activity from "../../../../../../store/types/activity/Activity";

const getSports = (matches: Activity[]) => {
  const sportsArray = matches.map((actividad) => actividad.sport);
  const uniqueSports = sportsArray.filter(
    (sport, index, self) => self.indexOf(sport) === index
  );
  return uniqueSports
};

export default getSports;
