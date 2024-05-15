function getTextByDate(tiempoUnix: number) {
  const ahora = new Date();
  const tiempoIngresado = new Date(tiempoUnix); // Multiplicar por 1000 para convertir segundos a milisegundos

  const diferenciaDias = Math.floor(
    (ahora.getTime() - tiempoIngresado.getTime()) / (1000 * 60 * 60 * 24)
  );

  console.log('diferenciaDias',diferenciaDias)
  
  if (diferenciaDias === 0) {
    // Si es el día actual
    const hora = `${tiempoIngresado.getHours()}`.padStart(2, "0");
    const minutos = `${tiempoIngresado.getMinutes()}`.padStart(2, "0");
    return `${hora}:${minutos}`;
  } else if (diferenciaDias === 1) {
    // Si es ayer
    return "Ayer";
  } else if (diferenciaDias < 7) {
    // Si fue hace menos de una semana
    const diasSemana = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ];
    const diaSemana = diasSemana[tiempoIngresado.getDay()];
    return diaSemana;
  } else {
    // Si fue hace más de una semana
    const dia = `${tiempoIngresado.getDate()}`.padStart(2, "0");
    const mes = `${tiempoIngresado.getMonth() + 1}`.padStart(2, "0");
    const año = `${tiempoIngresado.getFullYear()}`.slice(2);
    return `${dia}/${mes}/${año}`;
  }
}
export default getTextByDate;
