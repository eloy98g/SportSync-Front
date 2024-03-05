import { configureStore } from "@reduxjs/toolkit";

// Reducers
import userReducer from "./features/user/userSlice";
import activityReducer from "./features/activity/activitySlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    activity: activityReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
