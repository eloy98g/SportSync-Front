import { createAsyncThunk } from "@reduxjs/toolkit";
import get from "../../../../api/get";

const fetchUser = createAsyncThunk("user/fetchUser", () => {
  return get("https://jsonplaceholder.typicode.com/users");
});

export default fetchUser as any;
