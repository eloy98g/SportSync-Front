import React, { useState, useEffect } from "react";
import { createContext } from "react";

// Hooks
import useStatus, { STATUS } from "../../../../../../hooks/useStatus";

// Methods
import mapActivity from "../../../../../../store/features/activity/methods/mapActivity";
import getSports from "../methods/getSports";

// Placeholders
import ACTIVITIES_PAST from "../../../../../../api/placeholders/ACTIVITIES_PAST";

// Types
import Sport from "../../../../../../store/types/Sport";
import Activity from "../../../../../../store/types/activity/Activity";

interface Props {
  userGid: number;
  children?: React.ReactNode;
}

interface ISportContext {
  activities: Activity[];
  selectedSport: number | null;
  sports: Sport[];
  status: STATUS;
  error: string;
  setSelectedSport: React.Dispatch<React.SetStateAction<number | null>>;
}

const INITIAL_STATE = {
  activities: [],
  selectedSport: null,
  sports: [],
  status: "idle" as STATUS,
  error: "",
  setSelectedSport: () => {},
};


const SportContainerContext = createContext<ISportContext>(INITIAL_STATE);

const SportContainerProvider = ({ userGid, children }: Props) => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedSport, setSelectedSport] = useState<number | null>(null);
  const [sports, setSports] = useState<Sport[]>([]);
  const [error, setError] = useState<string>("");
  const { status, setStatus } = useStatus();

  useEffect(() => {
    try {
      // Todo: get past activities by user gid
      const activityArray = ACTIVITIES_PAST.map((activity) =>
        mapActivity(activity)
      );
      setActivities(activityArray);
      const auxSports = getSports(activityArray);
      setSports(auxSports);

      if (auxSports.length > 0) {
        setSelectedSport(auxSports[0].gid);
        setStatus("success");
      } else {
        setStatus("empty");
      }
    } catch (error) {
      setStatus("error");
      setError(error.message);
    }
  }, []);

  return (
    <SportContainerContext.Provider
      value={{
        activities,
        selectedSport,
        sports,
        status,
        error,
        setSelectedSport,
      }}
    >
      {children}
    </SportContainerContext.Provider>
  );
};

export { SportContainerContext, SportContainerProvider };
