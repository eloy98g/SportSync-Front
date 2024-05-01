import Score from "../../store/types/activity/Score";

const groupScores = (result: Score[]) => {
  const groupedByPosition = result.reduce((acc: any, obj: Score) => {
    const position = obj.position;
    if (!acc[position]) {
      acc[position] = [];
    }
    acc[position].push(obj);
    return acc;
  }, {});

  console.log('groupedByPosition',groupedByPosition)
  return groupedByPosition as Score[];
};

export default groupScores;