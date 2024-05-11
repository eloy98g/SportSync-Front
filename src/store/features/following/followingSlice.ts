import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Methods
import fetchFollowing from "./methods/fetchFollowing";

// Types
import Player from "../../types/activity/Player";

type FollowingState = {
  loading: boolean;
  error: string;
  following: Player[];
};

const initialState: FollowingState = {
  following: [],
  loading: false,
  error: "",
};

const followingSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    unfollowPlayer: (state, action: PayloadAction<string>) => {
      // TODO: API call for following a player
      const newArray = state.following.filter(
        (player) => player.gid !== action.payload
      );
      state.following = newArray;
    },
    followPlayer: (state, action: PayloadAction<Player>) => {
      // TODO: API call for unfollowing a player
      const newArray = [...state.following, action.payload];
      state.following = newArray;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFollowing.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchFollowing.fulfilled,
      (state, action: PayloadAction<Player[]>) => {
        state.following = action.payload;
        state.loading = false;
      }
    );
    builder.addCase(fetchFollowing.rejected, (state, action) => {
      state.error = action.error.message || "Error desconocido";
      state.loading = false;
    });
  },
});

export const { unfollowPlayer, followPlayer } = followingSlice.actions;

export default followingSlice.reducer;
