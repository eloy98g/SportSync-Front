import { Activity } from "./routes/activity";
import { Application } from "./routes/application";
import { Auth } from "./routes/auth";
import { Sport } from "./routes/sport";
import { User } from "./routes/user";

const Api = {
  auth: Auth,
  activity: Activity,
  sport: Sport,
  user: User,
  application: Application,
};

export default Api;
