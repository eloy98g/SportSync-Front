import Activity from "../../../../store/types/activity/Activity";
import Team from "../../../../store/types/activity/Team";

const isActivityFull = (data: Activity) => {
  const { teams, playersPerTeam } = data;

  const finalNumPlayers = teams.length * playersPerTeam;
  let currentPlayers = 0;

  teams.forEach((team: Team) => {
    currentPlayers += team.players.filter(
      (player) => !player?.placeholder
    ).length;
  });

  return currentPlayers === finalNumPlayers;
};

export default isActivityFull;
