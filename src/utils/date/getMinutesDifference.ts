const getMinutesDifference = (timeStart: number, timeEnd: number): number => {
  const ms = 60 * 1000;

  const msDifference = (timeStart - timeEnd) * 1000;
  const minuteDifference = msDifference / ms;

  return Math.abs(minuteDifference);
};

export default getMinutesDifference;
