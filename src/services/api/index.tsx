import { Activity } from "./routes/activity";
import { Auth } from "./routes/auth";
import { Sport } from "./routes/sport";
import { User } from "./routes/user";

const Api = {
  auth: Auth,
  activity: Activity,
  sport: Sport,
  user: User,
};

export default Api;
