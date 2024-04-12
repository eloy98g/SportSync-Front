// Placeholder
import CREATE_ACTIVITY_SPORTS from "../../../../api/placeholders/CREATE_ACTIVITY_SPORTS";

// Filters
import sortingValues from "../filters/sortingValues";

// Types
import SearchFilters from "../types/SearchFilters";

const INITIAL_FILTERS: SearchFilters = {
  sports: [],
  type: null,
  insideUserArea: false,
  price: null,
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
