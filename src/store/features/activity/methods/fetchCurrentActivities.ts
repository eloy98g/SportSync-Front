import { createAsyncThunk } from "@reduxjs/toolkit";
import Activity from "../../../types/activity/Activity";
import mapActivity from "./mapActivity";
import Api from "../../../../services/api";

const fetchCurrentActivities = createAsyncThunk(
  "activity/fetchCurrentActivities",
  async () => {
    // console.log("fetchCurrentActivities");
    // const response = await Api.activity.getAll(undefined);
    // const { status, data, message } = response;
    // if (status === "success") {
    //   return data.map((activity: any) => mapActivity(activity) as Activity);
    // } else {
    //   throw new Error(message);
    // }
    return []
  }
);

export default fetchCurrentActivities;
