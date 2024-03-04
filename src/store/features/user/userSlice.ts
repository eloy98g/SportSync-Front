import { createSlice } from "@reduxjs/toolkit";
import fetchUser from "./methods/fetchUser";
import User, { EMPTY_USER } from "../../types/User";

interface UserState {
  loading: boolean;
  error: string;
  user: User;
}

const initialState: UserState = {
  user: EMPTY_USER,
  loading: false,
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload.data;
      state.loading = false;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.error = action.error.message || "Error desconocido";
      state.loading = false;
    });
  },
});

export default userSlice.reducer;
