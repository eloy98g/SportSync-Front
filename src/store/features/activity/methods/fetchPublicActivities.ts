import { createAsyncThunk } from "@reduxjs/toolkit";
import get from "../../../../api/get";
import ACTIVITIES_PUBLIC from "../../../../api/placeholders/ACTIVITIES_PUBLIC";
import ApiResponse from "../../../../api/types/ApiResponse";
import Activity from "../../../types/Activity";
import mapActivity from "./mapActivity";

const fetchPublicActivities = createAsyncThunk("activity/fetchPublicActivities", async () => {
  // REMOVE COMMENT

  // const response = await get("");
  // const { status, data, error } = response;
  // if (status === "success") {
  //   const result: Activity[] = ACTIVITIES_PUBLIC.map((activity) =>
  //     mapActivity(activity)
  //   );
  //   return result;
  // } else {
  //   throw new Error(error);
  // }
  const response: Activity[] = ACTIVITIES_PUBLIC.map((activity) =>
    mapActivity(activity)
  );
  return response;
});

export default fetchPublicActivities;
