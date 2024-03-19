const isActivityFull = (data: any) => {
  const { teams, playersPerTeam, teamPlayers } = data;

  const finalNumPlayers = teams * playersPerTeam;
  let currentPlayers = 0;

  teamPlayers.forEach((team: any) => {
    currentPlayers += team.numPlayers;
  });
  return currentPlayers === finalNumPlayers;
};

export default isActivityFull;
