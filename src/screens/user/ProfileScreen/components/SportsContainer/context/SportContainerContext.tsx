import React, { useState, useEffect } from "react";
import { createContext } from "react";

// Hooks
import useStatus, { STATUS } from "../../../../../../hooks/useStatus";

// Methods
import mapActivity from "../../../../../../store/types/activity/utils/mapActivity";
import getSports from "../methods/getSports";

// Services
import Api from "../../../../../../services/api";

// Types
import Sport from "../../../../../../store/types/Sport";
import Activity from "../../../../../../store/types/activity/Activity";

interface Props {
  userGid: string;
  children?: React.ReactNode;
}

interface ISportContext {
  activities: Activity[];
  selectedSport: string | null;
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

  const getData = async () => {
    try {
      const response = await Api.activity.getAll(
        "?userGid=" + userGid + "&status[]=finished"
      );
      if (response.status === "error") {
        setStatus("error");
        setError(response.message);
      } else if (response.data === 0) {
        setStatus("empty");
      } else {
        const activityArray: Activity[] = response.data.map((activity: any) =>
          mapActivity(activity)
        );
        setActivities(activityArray);
        const auxSports = getSports(activityArray);
        setSports(auxSports);
        setSelectedSport(auxSports[0].gid);
        setStatus("success");
      }
    } catch (error: any) {
      setStatus("error");
      setError(error.message);
    }
  };

  useEffect(() => {
    getData();
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
