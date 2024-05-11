import { createAsyncThunk } from "@reduxjs/toolkit";
import mapFollowing from "./mapFollowing";
import Api from "../../../../services/api";

const fetchFollowing = createAsyncThunk(
  "user/fetchFollowing",
  async ({ userGid }: any) => {
    const params = `followedBy=${userGid}`;
    const response = await Api.user.getAll(params);
    if (response.status === "success") {
      return mapFollowing(response.data);
    }
    return []
  }
);

export default fetchFollowing;
