import Score from "../../store/types/activity/Score";

const getWinner = (result: Score[]): string => {
  const pointsByTeam = {};

  // Iterar sobre los resultados y acumular los puntos por equipo
  result.forEach((result) => {
    const { team, points } = result;
    if (pointsByTeam[team]) {
      pointsByTeam[team] += points;
    } else {
      pointsByTeam[team] = points;
    }
  });

  // Encontrar el equipo con la puntuación más alta
  let winningTeam = "";
  let maxPoints = -1;

  for (const team in pointsByTeam) {
    if (pointsByTeam[team] > maxPoints) {
      maxPoints = pointsByTeam[team];
      winningTeam = team;
    }
  }
  return winningTeam;
};
export default getWinner;
