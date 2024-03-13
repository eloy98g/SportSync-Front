const getStats = (activities = []) => {
  let victories = 0;
  let ties = 0;
  let loses = 0;

  activities.map((item: any) => {
    switch (item.result.result) {
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

  const total = victories + loses + ties;
  const percentage = Math.round((victories / total) * 100).toFixed(0);

  return { victories, ties, loses, total, percentage };
};

export default getStats;
