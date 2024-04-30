import { Activity } from "./routes/activity";
import { Auth } from "./routes/auth";
import { Sport } from "./routes/sport";

const Api = {
  auth: Auth,
  activity: Activity,
  sport: Sport,
};

export default Api;
