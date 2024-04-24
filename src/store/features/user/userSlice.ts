import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Methods
import signUp from "./methods/signUp";
import toggleSport from "./methods/toggleSport";
// Types
import User, { EMPTY_USER } from "../../types/user/User";
import Location from "../../types/location/Location";

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
    setLocation: (state, action: PayloadAction<Location>) => {
      state.user.location = action.payload;
    },
    toggleFavoriteSport: (state, action: PayloadAction<number>) => {
      const currentFavorites = state.user.favoriteSports;
      const sport = action.payload;
      state.user.favoriteSports = toggleSport(currentFavorites, sport);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signUp.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      signUp.fulfilled,
      (state, action: PayloadAction<User>) => {
        state.user = action.payload;
        state.loading = false;
      }
    );
    builder.addCase(signUp.rejected, (state, action) => {
      state.error = action.error.message || "Error desconocido";
      state.loading = false;
    });
  },
});

export const { logOut, setLocation, toggleFavoriteSport } = userSlice.actions;

export default userSlice.reducer;
