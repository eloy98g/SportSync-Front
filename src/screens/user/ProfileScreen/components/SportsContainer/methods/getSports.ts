const getSports = (matches: any) =>
  matches.reduce((sports: any, match: any) => {
    const sportExists = sports.some(
      (sport: any) => sport.gid === match.sport.gid
    );

    if (!sportExists) {
      sports.push(match.sport);
    }

    return sports;
  }, []);

export default getSports;
