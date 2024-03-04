import { createAsyncThunk } from "@reduxjs/toolkit";
import get from "../../../../api/get";
import USER_1 from "../../../../api/placeholders/USER_1";
import ApiResponse from "../../../../api/types/ApiResponse";
import User from "../../../types/User";
import { mapUser } from "./mapUser";

const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  // REMOVE COMMENT

  // const response = await get("");
  // const { status, data, error } = response;
  // if (status === "success") {
  //   return mapUser(data) as User;
  // } else {
  //   throw new Error(error);
  // }
  
  return mapUser(USER_1);
});

export default fetchUser;
