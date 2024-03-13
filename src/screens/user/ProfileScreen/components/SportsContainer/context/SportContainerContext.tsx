import React, { useState, useEffect } from "react";
import { createContext } from "react";

// Methods
import getSports from "../methods/getSports";

// Placeholders
import ACTIVITIES_PAST from "../../../../../../api/placeholders/ACTIVITIES_PAST";

interface Props {
  userGid: number | null;
  children?: any;
}

interface ISportContext {
  activities: any[];
  selectedSport: number | null;
  sports: any[];
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

type STATUS = "idle" | "loading" | "empty" | "error" | "success";

const SportContainerContext = createContext<ISportContext>(INITIAL_STATE);

const SportContainerProvider = ({ userGid, children }: Props) => {
  // Todo: change any's to proper types
  const [activities, setActivities] = useState<any>([]);
  const [selectedSport, setSelectedSport] = useState<any>(null);
  const [sports, setSports] = useState<any>();
  const [status, setStatus] = useState<STATUS>("idle");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    try {
      // Todo: get past activities by user gid
      setActivities(ACTIVITIES_PAST);
      const auxSports = getSports(ACTIVITIES_PAST);
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
