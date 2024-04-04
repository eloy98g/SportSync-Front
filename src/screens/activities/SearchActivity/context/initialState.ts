import { ActivityType } from "../../../../store/types/activity/Activity";
import PriceSlot from "../types/PriceSlot";
import SortBy from "../types/SortBy";

const INITIAL_FILTERS = {
  sport: { id: 1, label: "Fútbol" },
  type: "normal" as ActivityType,
  insideUserArea: true,
  price: "0-5€" as PriceSlot,
  sortBy: "recent" as SortBy,
};

const INITIAL_STATE = {
  filters: INITIAL_FILTERS,
  setFilters: () => {},
  filteredActivies: [],
};

export { INITIAL_FILTERS };
export default INITIAL_STATE;
