import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
} from "react";

// Hooks
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import useStatus, { STATUS } from "../../../../hooks/useStatus";

// Initial State
import INITIAL_STATE, { INITIAL_FILTERS } from "./initialState";

// Types
import SearchFilters from "../types/SearchFilters";
import Activity from "../../../../store/types/activity/Activity";
import Sport from "../../../../store/types/sport/Sport";

// Methods
import insideRangePrice from "../methods/insideRangePrice";
import sortActivities from "../methods/sortActivities";

// Services
import Api from "../../../../services/api";

// Store
import fetchPublicActivities from "../../../../store/features/activity/methods/fetchPublicActivities";

// Utils
import isPointInsideRadius from "../../../../utils/distances/isPointInsideRadius";

interface ContextProps {
  setFilters: Dispatch<SetStateAction<SearchFilters>>;
  filteredActivities: Activity[];
  filters: SearchFilters;
  sports: Sport[];
  status: STATUS;
}

const SearchContext = createContext<ContextProps>(INITIAL_STATE);

interface Props {
  children: React.ReactNode;
}

const SearchProvider = ({ children }: Props) => {
  const { status, setStatus, } = useStatus();
  const publicActivities = useAppSelector(
    (state) => state.activity.publicActivities
  );
  const userLocation = useAppSelector((state) => state.user.user.location);
  const dispatch = useAppDispatch();

  // TODO api call for user's favoriteSports
  const favoriteSports = useAppSelector(
    (state) => state.user.user.favoriteSports
  );

  const [filters, setFilters] = useState<SearchFilters>(INITIAL_FILTERS);
  const [sports, setSports] = useState<Sport[]>([]);
  const [filteredActivities, setFilteredActivities] =
    useState<Activity[]>(publicActivities);

  const getData = async () => {
    setStatus("loading");
    try {
      const response = await Api.sport.getAll();
      if (response.status === "success") setSports(response.data);
      setStatus("success");
    } catch (error) {
      setStatus("error");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const getPublicActivities = async () => {
    setStatus("loading");
    await dispatch(fetchPublicActivities());
    setStatus("success");
  };

  useEffect(() => {
    getPublicActivities();
  }, [filters]);
  
  useEffect(() => {
    const auxArray = publicActivities.filter(
      (activity) =>
        (filters?.sports.length > 0
          ? filters?.sports.includes(activity.sport.gid)
          : true) &&
        (filters?.type ? activity.type === filters?.type : true) &&
        (filters?.price
          ? insideRangePrice(activity.price, filters?.price)
          : true) &&
        (filters?.insideUserArea
          ? isPointInsideRadius(userLocation, activity.location)
          : true)
    );
    const finalArray = sortActivities(auxArray, filters.sortBy, userLocation);
    setFilteredActivities(finalArray);
  }, [publicActivities]);

  return (
    <SearchContext.Provider
      value={{ filters, setFilters, status, filteredActivities, sports }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export { SearchProvider };
export default SearchContext;
