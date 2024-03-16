import DAYS from "../../constants/DAYS";
import MONTHS from "../../constants/MONTHS";

const getDateWithDuration = (unixDate: number, duration: number) => {
  const date = new Date(unixDate * 1000);

  const weekDay = DAYS[date.getDay()];
  const month = MONTHS[date.getMonth()];
  const dia = date.getDate();
  let hour = date.getHours();
  let minutes = date.getMinutes();

  minutes = minutes < 10 ? "0" + minutes : minutes;

  const totalDuration = date.getTime() + duration * 60000;
  const newDate = new Date(totalDuration);

  let finalHour = newDate.getHours();
  let finalMinute = newDate.getMinutes();

  finalMinute = finalMinute < 10 ? "0" + finalMinute : finalMinute;

  return `${weekDay} ${dia} ${month} ${hour}:${minutes} - ${finalHour}:${finalMinute}`;
};

export default getDateWithDuration;
