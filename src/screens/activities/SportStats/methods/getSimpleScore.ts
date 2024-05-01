import Score from "../../../../store/types/activity/Score";

interface SimpleScore {
  userScore: number;
  otherScore: number;
}

const getSimpleScore = (result: Score[], userTeam: string): SimpleScore => {
  let userScore = 0;
  let otherScore = 0;

  for (let i = 1; i <= result.length; i++) {
    const results = result.filter((item) => item.position === i);
    const hasNext = result.filter((item) => item.position === i + 1).length > 0;
    const userResult =
      results.find((item) => item.team === userTeam)?.points || 0;
    const otherResult =
      results.find((item) => item.team !== userTeam)?.points || 0;
    if (!hasNext && i === 1) {
      userScore = userResult;
      otherScore = otherResult;
    } else if (!results) {
      break;
    } else {
      if (userResult && otherResult) {
        if (userResult > otherResult) {
          userScore++;
        } else if (userResult < otherResult) {
          otherScore++;
        } else {
          userScore++;
          otherScore++;
        }
      }
    }
  }
  return { userScore, otherScore };
};

export default getSimpleScore;
