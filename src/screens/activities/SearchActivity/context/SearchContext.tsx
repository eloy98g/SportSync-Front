import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
} from "react";

// Hooks
import { useAppSelector } from "../../../../hooks";

// Initial State
import INITIAL_STATE, { INITIAL_FILTERS } from "./initialState";

// Types
import SearchFilters from "../types/SearchFilters";
import Activity from "../../../../store/types/activity/Activity";
import Sport from "../../../../store/types/sport/Sport";

// Placeholder
import CREATE_ACTIVITY_SPORTS from "../../../../api/placeholders/CREATE_ACTIVITY_SPORTS";

interface ContextProps {
  setFilters: Dispatch<SetStateAction<SearchFilters>>;
  filteredActivies: Activity[];
  filters: SearchFilters;
  sports: Sport[];
}

const SearchContext = createContext<ContextProps>(INITIAL_STATE);

interface Props {
  children: React.ReactNode;
}

const SearchProvider = ({ children }: Props) => {
  const [filters, setFilters] = useState<SearchFilters>(INITIAL_FILTERS);
  const [sports, setSports] = useState<Sport[]>(CREATE_ACTIVITY_SPORTS);

  const publicActivities = useAppSelector(
    (state) => state.activity.publicActivities
  );

  useEffect(() => {
    // TODO: api call for fetching Sports
    // setSports(//)
    setTimeout(() => {
      setSports(CREATE_ACTIVITY_SPORTS);
    }, 1000);
  }, []);

  console.log('CREATE_ACTIVITY_SPORTS',CREATE_ACTIVITY_SPORTS.length)
  console.log('sports',sports.length)
  const filteredActivies = publicActivities;

  return (
    <SearchContext.Provider
      value={{ filters, setFilters, filteredActivies, sports }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export { SearchProvider };
export default SearchContext;
