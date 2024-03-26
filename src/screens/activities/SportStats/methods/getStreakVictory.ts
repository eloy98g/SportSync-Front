import Activity from "../../../../store/types/activity/Activity";

const getStreakVictory = (activities: Activity[]) => {
  activities.sort((a: Activity, b: Activity) => a.startDate - b.startDate);
  let victoryStreak = 0;

  activities.map((activity: Activity) => {
    if (activity.result.result === "victory") {
      victoryStreak++;
    } else {
      victoryStreak = 0;
    }
    return victoryStreak;
  });

  return victoryStreak;
};

export default getStreakVictory;
