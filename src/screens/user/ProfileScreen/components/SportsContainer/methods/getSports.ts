import Activity from "../../../../../../store/types/activity/Activity";
import Sport from "../../../../../../store/types/Sport";

const getSports = (matches: Activity[]) =>
  matches.reduce((sports: Sport[], match: Activity) => {
    const sportExists = sports.some(
      (sport: any) => sport.gid === match.sport.gid
    );

    if (!sportExists) {
      sports.push(match.sport);
    }

    return sports;
  }, []);

export default getSports;
