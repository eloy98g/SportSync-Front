import { createAsyncThunk } from "@reduxjs/toolkit";
import get from "../../../../api/get";
import USER_1 from "../../../../api/placeholders/USER_1";
import USER_2 from "../../../../api/placeholders/USER_2";
import ApiResponse from "../../../../api/types/ApiResponse";
import User from "../../../types/User";
import mapUser from "./mapUser";

const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async ({ userGid }: any) => {
    // REMOVE COMMENT

    // const response = await get("");
    // const { status, data, error } = response;
    // if (status === "success") {
    //   return mapUser(data) as User;
    // } else {
    //   throw new Error(error);
    // }
    const user = userGid === 1 ? USER_1 : USER_2;

    return mapUser(USER_1);
  }
);

export default fetchUser;
