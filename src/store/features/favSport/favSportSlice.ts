import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Methods
import fetchFavSports from "./methods/fetchFavSports";

// Types
import Player from "../../types/activity/Player";

type FavSportSlice = {
  loading: boolean;
  error: string;
  favSports: string[];
};

const initialState: FavSportSlice = {
  favSports: [],
  loading: false,
  error: "",
};

const favSportSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    unfavSport: (state, action: PayloadAction<string>) => {
      const newArray = state.favSports.filter(
        (sport) => sport !== action.payload
      );
      state.favSports = newArray;
    },
    favSport: (state, action: PayloadAction<string>) => {
      const newArray = [...state.favSports, action.payload];
      state.favSports = newArray;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFavSports.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchFavSports.fulfilled,
      (state, action: PayloadAction<string[]>) => {
        state.favSports = action.payload;
        state.loading = false;
      }
    );
    builder.addCase(fetchFavSports.rejected, (state, action) => {
      state.error = action.error.message || "Error desconocido";
      state.loading = false;
    });
  },
});

export const { unfavSport, favSport } = favSportSlice.actions;

export default favSportSlice.reducer;
