const getStreakVictory = (activities = []) => {
  activities.sort((a: any, b: any) => a.startDate - b.startDate);
  let victoryStreak = 0;

  activities.map((activity: any) => {
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
