const getHour = (unixTimestamp: number) => {
  const date = new Date(unixTimestamp);
  const horaLocal = date.toLocaleTimeString("es-ES", {
    timeZone: "Europe/Madrid",
    hour12: false,
  });
  return horaLocal.split(":").slice(0, 2).join(":");
};

export default getHour;
