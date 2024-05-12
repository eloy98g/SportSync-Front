import { Activity } from "./routes/activity";
import { Application } from "./routes/application";
import { Auth } from "./routes/auth";
import { Chat } from "./routes/chat";
import { Sport } from "./routes/sport";
import { User } from "./routes/user";

const Api = {
  auth: Auth,
  activity: Activity,
  sport: Sport,
  user: User,
  application: Application,
  chat: Chat,
};

export default Api;
