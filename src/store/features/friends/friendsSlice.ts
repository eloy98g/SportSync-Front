import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Methods
import fetchFriends from "./methods/fetchFriends";

// Types
import Player from "../../types/activity/Player";

type FriendsState = {
  loading: boolean;
  error: string;
  friends: Player[];
};

const initialState: FriendsState = {
  friends: [],
  loading: false,
  error: "",
};

const friendsSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    unfollowPlayer: (state, action: PayloadAction<string>) => {
      // TODO: API call for following a player
      const newArray = state.friends.filter(
        (player) => player.gid !== action.payload
      );
      state.friends = newArray;
    },
    followPlayer: (state, action: PayloadAction<Player>) => {
      // TODO: API call for unfollowing a player
      const newArray = [...state.friends, action.payload];
      state.friends = newArray;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFriends.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchFriends.fulfilled,
      (state, action: PayloadAction<Player[]>) => {
        state.friends = action.payload;
        state.loading = false;
      }
    );
    builder.addCase(fetchFriends.rejected, (state, action) => {
      state.error = action.error.message || "Error desconocido";
      state.loading = false;
    });
  },
});

export const { unfollowPlayer, followPlayer } = friendsSlice.actions;

export default friendsSlice.reducer;
