import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Methods
import fetchCurrentActivities from "./methods/fetchCurrentActivities";
import fetchPublicActivities from "./methods/fetchPublicActivities";

// Types
import Activity from "../../types/Activity";

type ActivityState = {
  loading: boolean;
  error: string;
  publicActivities: Activity[];
  currentActivities: Activity[];
};

const initialState: ActivityState = {
  publicActivities: [],
  currentActivities: [],
  loading: false,
  error: "",
};

const activitySlice = createSlice({
  name: "activity",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCurrentActivities.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchCurrentActivities.fulfilled,
      (state, action: PayloadAction<Activity[]>) => {
        state.currentActivities = action.payload;
        state.loading = false;
      }
    );
    builder.addCase(fetchCurrentActivities.rejected, (state, action) => {
      state.error = action.error.message || "Error desconocido";
      state.loading = false;
    });
    builder.addCase(fetchPublicActivities.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchPublicActivities.fulfilled,
      (state, action: PayloadAction<Activity[]>) => {
        state.publicActivities = action.payload;
        state.loading = false;
      }
    );
    builder.addCase(fetchPublicActivities.rejected, (state, action) => {
      state.error = action.error.message || "Error desconocido";
      state.loading = false;
    });
  },
});

export default activitySlice.reducer;
