const unixToDate = (unix: number): string => {
  if (unix !== null) {
    const dateObject = new Date(unix);

    const formattedDate = new Intl.DateTimeFormat("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    }).format(dateObject);
    return formattedDate;
  } else {
    return "";
  }
};

export default unixToDate;
