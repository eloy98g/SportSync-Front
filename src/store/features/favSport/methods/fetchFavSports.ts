import { createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../../../../services/api";

const fetchFavSports = createAsyncThunk(
  "user/fetchFollowing",
  async ({ userGid }: any) => {
    console.log('userGid',userGid)
    const response = await Api.user.getFavSports(userGid);
    console.log('getFavSports',response)
    if (response.status === "success") {
      return response.data
    }
    return []
  }
);

export default fetchFavSports;
