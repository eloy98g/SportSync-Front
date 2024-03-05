import { createAsyncThunk } from "@reduxjs/toolkit";
import get from "../../../../api/get";
import CHATS from "../../../../api/placeholders/CHATS";
import USER_1 from "../../../../api/placeholders/USER_1";
import ApiResponse from "../../../../api/types/ApiResponse";
import Chat from "../../../types/Chat";
import User from "../../../types/User";
import mapChat from "./mapChat";

const fethChats = createAsyncThunk("chat/fetchChats", async () => {
  // REMOVE COMMENT

  // const response = await get("");
  // const { status, data, error } = response;
  // if (status === "success") {
  //   const result: Chat[] = CHATS.map((chat) => mapChat(chat));
  //   return result
  // } else {
  //   throw new Error(error);
  // }
  const result: Chat[] = CHATS.map((chat) => mapChat(chat));
  return result;
});

export default fethChats;
