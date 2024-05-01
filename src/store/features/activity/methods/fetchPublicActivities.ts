import { createAsyncThunk } from "@reduxjs/toolkit";
import Activity from "../../../types/activity/Activity";
import mapActivity from "./mapActivity";
import Api from "../../../../services/api";

const fetchPublicActivities = createAsyncThunk(
  "activity/fetchPublicActivities",
  async () => {
    const response = await Api.activity.getAll("?visibility=public&status[]=pending");
    const { status, data, message } = response;
    if (status === "success") {
      return data.map((activity: any) => mapActivity(activity) as Activity);
    } else {
      throw new Error(message);
    }
  }
);

export default fetchPublicActivities;
