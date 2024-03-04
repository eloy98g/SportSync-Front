import { configureStore } from "@reduxjs/toolkit";

// Reducers
import userReducer from "./features/user/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
