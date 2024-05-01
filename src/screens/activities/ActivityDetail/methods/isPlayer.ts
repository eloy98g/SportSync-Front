import Team from "../../../../store/types/activity/Team";

const isPlayer = (userGid: string, teams: Team[]) => {
  let aux = false;

  for (const team of teams) {
    for (const player of team.players) {
      if (player.gid == userGid) {
        aux = true;
      }
    }
  }

  return aux;
};

export default isPlayer;
