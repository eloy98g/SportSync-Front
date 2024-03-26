import { createAsyncThunk } from "@reduxjs/toolkit";
import get from "../../../../api/get";
import ACTIVITIES_CURRENT from "../../../../api/placeholders/ACTIVITIES_CURRENT";
import ApiResponse from "../../../../api/types/ApiResponse";
import Activity from "../../../types/activity/Activity";
import mapActivity from "./mapActivity"

const fetchCurrentActivities = createAsyncThunk("activity/fetchCurrentActivities", async () => {
  // REMOVE COMMENT

  // const response = await get("");
  // const { status, data, error } = response;
  // if (status === "success") {
  //   const result: Activity[] = ACTIVITIES_CURRENT.map((activity) =>
  //     mapActivity(activity)
  //   );
  //   return result;
  // } else {
  //   throw new Error(error);
  // }
  const response: Activity[] = ACTIVITIES_CURRENT.map((activity) =>
    mapActivity(activity)
  );
  return response;
});

export default fetchCurrentActivities;
