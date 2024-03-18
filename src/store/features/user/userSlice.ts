import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Methods
import fetchUser from "./methods/fetchUser";

// Types
import User, { EMPTY_USER } from "../../types/User";

type UserState = {
  loading: boolean;
  error: string;
  user: User;
};

const initialState: UserState = {
  user: EMPTY_USER,
  loading: false,
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut: (state) => {
      state.user = EMPTY_USER;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchUser.fulfilled,
      (state, action: PayloadAction<User>) => {
        state.user = action.payload;
        state.loading = false;
      }
    );
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.error = action.error.message || "Error desconocido";
      state.loading = false;
    });
  },
});

export const { logOut } = userSlice.actions;

export default userSlice.reducer;
