import { createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../../../../services/api";

const fetchFavSports = createAsyncThunk(
  "user/fetchFavSports",
  async ({ userGid }: any) => {
    const response = await Api.user.getFavSports(userGid);
    if (response.status === "success") {
      return response.data
    }
    return []
  }
);

export default fetchFavSports;
