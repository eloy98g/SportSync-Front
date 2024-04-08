import { ActivityType } from "../../../../store/types/activity/Activity";

// Placeholder
import CREATE_ACTIVITY_SPORTS from "../../../../api/placeholders/CREATE_ACTIVITY_SPORTS";

// Filters
import priceValues from "../filters/priceValues";
import sortingValues from "../filters/sortingValues";

// Types
import SearchFilters from "../types/SearchFilters";

const INITIAL_FILTERS: SearchFilters = {
  sport: 1,
  type: "normal" as ActivityType,
  insideUserArea: true,
  price: priceValues[0].value,
  sortBy: sortingValues[0].value,
};

const INITIAL_STATE = {
  filters: INITIAL_FILTERS,
  setFilters: () => {},
  filteredActivities: [],
  sports: CREATE_ACTIVITY_SPORTS,
};

export { INITIAL_FILTERS };
export default INITIAL_STATE;
