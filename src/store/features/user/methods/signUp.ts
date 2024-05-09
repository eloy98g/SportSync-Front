import { createAsyncThunk } from "@reduxjs/toolkit";

// Api
import Api from "../../../../services/api";

// Types
import User from "../../../types/user/User";
import mapUser from "../../../types/user/utils/mapUser";

const signUp = createAsyncThunk("user/signUp", async (input: any) => {
  const response = await Api.auth.signUp(input);
  const { status, data, message } = response;
  if (status === "success") {
    console.log('data', data )
    return mapUser(data) as User;
  } else {
    throw new Error(message);
  }
});

export default signUp;
