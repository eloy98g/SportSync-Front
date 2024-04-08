import { ActivityType } from "../../../../store/types/activity/Activity";
import PriceSlot from "../types/PriceSlot";
import SortBy from "../types/SortBy";

import CREATE_ACTIVITY_SPORTS from "../../../../api/placeholders/CREATE_ACTIVITY_SPORTS";
import SearchFilters from "../types/SearchFilters";
import priceValues from "../filters/priceValues";
import sortingValues from "../filters/sortingValues";

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
  filteredActivies: [],
  sports: CREATE_ACTIVITY_SPORTS,
};

export { INITIAL_FILTERS };
export default INITIAL_STATE;
