import { createAsyncThunk } from "@reduxjs/toolkit";
import Activity from "../../../types/activity/Activity";
import mapActivity from "./mapActivity";
import Api from "../../../../services/api";

const fetchCurrentActivities = createAsyncThunk(
  "activity/fetchCurrentActivities",
  async (userGid: string) => {
    const params = "?status[]=pending&status[]=closed&status[]=ongoing&&status[]=waitingScore&userGid="+userGid;
    const response = await Api.activity.getAll(params);
    const { status, data, message } = response;
    if (status === "success") {
      return data.map((activity: any) => mapActivity(activity) as Activity);
    } else {
      throw new Error(message);
    }
  }
);

export default fetchCurrentActivities;
