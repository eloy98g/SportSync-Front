import Score from "./Score";

type ResultType = "defeat" | "victory" | "tie";
type Result = {
  result: ResultType;
  partialScores: Score[];
  finalScores: Score[];
};

export { ResultType };
export default Result;
