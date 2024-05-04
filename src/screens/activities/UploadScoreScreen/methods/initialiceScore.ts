import Activity from "../../../../store/types/activity/Activity";
import Score from "../../../../store/types/activity/Score";

const initialiceScore = (activity: Activity): Score[] => {
  const { teams } = activity;

  let array: Score[] = [];

  teams.map((team) => {
    const gid = Math.floor(Math.random() * 101).toString();
    array.push({ gid, team: team.gid, points: null, position: 1 });
  });

  return array;
};

export default initialiceScore;
