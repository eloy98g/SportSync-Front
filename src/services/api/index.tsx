import { Activity } from "./routes/activity";
import { Application } from "./routes/application";
import { Auth } from "./routes/auth";
import { Chat } from "./routes/chat";
import { Confirmation } from "./routes/confirmation";
import { Sport } from "./routes/sport";
import { User } from "./routes/user";

const Api = {
  auth: Auth,
  activity: Activity,
  sport: Sport,
  user: User,
  application: Application,
  chat: Chat,
  confirmation: Confirmation
};

export default Api;
