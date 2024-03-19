const isPlayer = (userGid: number, teams: []) => {
  let aux = false;

  for (const team of teams as any) {
    for (const player of team.players) {
      if (player.gid == userGid) {
        console.log("CHANED");
        aux = true;
      }
    }
  }

  return aux;
};

export default isPlayer;
