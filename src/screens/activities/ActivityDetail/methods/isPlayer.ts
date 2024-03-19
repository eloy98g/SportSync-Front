const isPlayer = (userGid: number, teams: []) => {
  let player = false;
  teams.forEach((team: any) => {
    team.players.forEach((player: any) => {
      if (player.gid === userGid) {
        player = true;
      }
    });
  });
  return player;
};

export default isPlayer;
