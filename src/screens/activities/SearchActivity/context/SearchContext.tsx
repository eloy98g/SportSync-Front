import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

// Hooks
import { useAppSelector } from "../../../../hooks";

// Initial State
import INITIAL_STATE, { INITIAL_FILTERS } from "./initialState";

// Types
import SearchFilters from "../types/SearchFilters";
import Activity from "../../../../store/types/activity/Activity";

interface ContextProps {
  setFilters: Dispatch<SetStateAction<SearchFilters>>;
  filteredActivies: Activity[];
  filters: SearchFilters;
}

const SearchContext = createContext<ContextProps>(INITIAL_STATE);

interface Props {
  children: React.ReactNode;
}

const SearchProvider = ({ children }: Props) => {
  const [filters, setFilters] = useState<SearchFilters>(INITIAL_FILTERS);
  const publicActivities = useAppSelector(
    (state) => state.activity.publicActivities
  );

  const filteredActivies = publicActivities;

  return (
    <SearchContext.Provider value={{ filters, setFilters, filteredActivies }}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchProvider };
export default SearchContext;
