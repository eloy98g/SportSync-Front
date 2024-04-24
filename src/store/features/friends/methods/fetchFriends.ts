import { createAsyncThunk } from "@reduxjs/toolkit";
import FRIENDS from "../../../../api/placeholders/FRIENDS";
import mapFriends from "./mapFriends";

const fetchFriends = createAsyncThunk(
  "user/fetchFriends",
  async ({ userGid }: any) => {
    // REMOVE COMMENT

    // const response = await get("");
    // const { status, data, error } = response;
    // if (status === "success") {
    //   return mapUser(data) as User;
    // } else {
    //   throw new Error(error);
    // }

    return mapFriends(FRIENDS);
  }
);

export default fetchFriends;
