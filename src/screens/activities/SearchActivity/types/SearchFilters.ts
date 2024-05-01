import { ActivityType } from "../../../../store/types/activity/Activity";
import PriceSlot from "./PriceSlot";
import SortBy from "./SortBy";

type SearchFilters = {
  sports: string[];
  type: ActivityType | null;
  insideUserArea: boolean;
  price: PriceSlot | null;
  sortBy: SortBy;
};

export default SearchFilters;
