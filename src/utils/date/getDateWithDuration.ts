import DAYS from "../../constants/DAYS";
import MONTHS from "../../constants/MONTHS";
import getHour from "./getHour";

const getDateWithDuration = (unixDate: number, duration: number) => {
  const date = new Date(unixDate);

  const weekDay = DAYS[date.getDay()];
  const month = MONTHS[date.getMonth()];
  const dia = date.getDate();

  const startHour = getHour(unixDate);
  const finishHour = getHour(unixDate + duration * 60000);

  return `${weekDay} ${dia} ${month} ${startHour} - ${finishHour}`;
};

export default getDateWithDuration;
