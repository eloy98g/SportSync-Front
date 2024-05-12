import { createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../../../../services/api";

const fethChats = createAsyncThunk(
  "chat/fetchChats",
  async ({ userGid }: any) => {
    const response = await Api.chat.getChats(userGid);
    if (response.status === "success") {
      return response.data;
    }
    return [];
  }
);

export default fethChats;
