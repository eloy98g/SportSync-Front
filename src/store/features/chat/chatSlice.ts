import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Methods
import fetchChats from "./methods/fetchChats";

// Types
import Chat from "../../types/Chat";

type ChatState = {
  loading: boolean;
  error: string;
  chat: Chat[];
  lastChatView: number | null;
};

const initialState: ChatState = {
  chat: [],
  loading: false,
  error: "",
  lastChatView: null,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    updateLastChatView: (state) => {
      const unixTimestamp = Math.floor(Date.now());
      state.lastChatView = unixTimestamp;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchChats.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchChats.fulfilled,
      (state, action: PayloadAction<Chat[]>) => {
        state.chat = action.payload;
        state.loading = false;
      }
    );
    builder.addCase(fetchChats.rejected, (state, action) => {
      state.error = action.error.message || "Error desconocido";
      state.loading = false;
    });
  },
});

export default chatSlice.reducer;
