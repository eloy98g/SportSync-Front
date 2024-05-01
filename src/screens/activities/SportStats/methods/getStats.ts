import getStreakVictory from "./getStreakVictory";

// Types
import Activity from "../../../../store/types/activity/Activity";
import Stats from "../../../../store/types/stats";
import getWinner from "../../../../utils/score/getWinner";
import getUserTeam from "../../../../utils/activity/getUserTeam";

const getStats = (activities: Activity[], userGid: string): Stats => {
  let victories = 0;
  let ties = 0;
  let loses = 0;

  activities.map((item: Activity) => {
    const winner = getWinner(item.result);
    const userTeam = getUserTeam(userGid, item.teams);

    const resultString =
      winner === null ? "tie" : winner === userTeam ? "victory" : "defeat";

    switch (resultString) {
      case "victory":
        victories++;
        break;
      case "defeat":
        loses++;
        break;
      case "tie":
        ties++;
        break;
    }
  });

  const sortedArray = activities.sort(
    (a: Activity, b: Activity) => a.startDate - b.startDate
  );
  const lastActivityDate =
    sortedArray[sortedArray.length - 1]?.startDate || false;

  const victoryStreak = getStreakVictory(activities);

  const total = victories + loses + ties;
  const percentage =
    total === 0
      ? 0
      : parseInt(Math.round((victories / total) * 100).toFixed(0));

  return {
    victories,
    ties,
    loses,
    total,
    percentage,
    victoryStreak,
    lastActivityDate,
  };
};

export default getStats;
