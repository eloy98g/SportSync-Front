import { ActivityType } from "../../../../store/types/activity/Activity";
import PriceSlot from "./PriceSlot";
import SortBy from "./SortBy";

type SearchFilters = {
  sport: number,
  type: ActivityType;
  insideUserArea: boolean;
  price: PriceSlot;
  sortBy: SortBy;
};

export default SearchFilters;
