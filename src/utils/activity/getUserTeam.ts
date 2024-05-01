import Team from "../../store/types/activity/Team";

const getUserTeam = (userId: string, teams: Team[]): string => {
  const userTeam = teams.find((team) =>
    team.players.some((player) => player.gid === userId)
  );
  return userTeam?.name || "";
};

export default getUserTeam;
