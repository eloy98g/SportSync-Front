import { combineReducers } from "redux";

// Reducers
import userReducer from "./features/user/userSlice";
import activityReducer from "./features/activity/activitySlice";
import chatReducer from "./features/chat/chatSlice";
import friendsSlice from "./features/friends/friendsSlice";

const rootReducer = combineReducers({
  user: userReducer,
  activity: activityReducer,
  chat: chatReducer,
  friends: friendsSlice,
});

export default rootReducer;
