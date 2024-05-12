import { createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../../../../services/api";
import Chat from "../../../types/chat/Chat";

const fethChats = createAsyncThunk(
  "chat/fetchChats",
  async ({ userGid }: any) => {
    const response = await Api.chat.getChats(userGid);
    if (response.status === "success") {
      return response.data.sort(
        (a: Chat, b: Chat) =>
          a.lastMessage?.createdAt || 0 - b.lastMessage?.createdAt || 0
      );
    }
    return [];
  }
);

export default fethChats;
