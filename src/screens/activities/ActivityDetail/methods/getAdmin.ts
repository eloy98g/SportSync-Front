const getAdmin = (adminGid: number, teams: []) => {
  let adminData = null;
  teams.forEach((team: any) => {
    team.players.forEach((player: any) => {
      if (player.gid === adminGid) {
        adminData = player;
      }
    });
  });
  return adminData;
};

export default getAdmin;
