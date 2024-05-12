import React, {
  useState,
  useEffect,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";

// Hooks
import useStatus, { STATUS } from "../../../../hooks/useStatus";

// Initial State
import INITIAL_DATA, { INITIAL_DRAFT } from "./initialState";

// Sections
import { SectionName } from "../sections";

// Types
import Draft from "../../../../store/types/draft/Draft";
import Sport from "../../../../store/types/sport/Sport";
import Api from "../../../../services/api";
import { useAppSelector } from "../../../../hooks";

interface ContextProps {
  setDraft: Dispatch<SetStateAction<Draft>>;
  setSection: Dispatch<SetStateAction<SectionName>>;
  draft: Draft;
  section: SectionName;
  sports: Sport[];
  status: STATUS;
  error: string;
}

const CreateContext = createContext<ContextProps>(INITIAL_DATA);

interface Props {
  children: React.ReactNode;
}

const CreateProvider = ({ children }: Props) => {
  const [section, setSection] = useState<SectionName>("sport");
  const [draft, setDraft] = useState<Draft>(INITIAL_DRAFT);
  const [sports, setSports] = useState<Sport[]>([]);
  const { status, setStatus } = useStatus();
  const [error, setError] = useState<string>("");

  const favSports = useAppSelector((state) => state.favSport.favSports);
  const getData = async () => {
    setStatus("loading");
    try {
      const response = await Api.sport.getAll();
      if (response.status === "success") {
        setSports(response.data);

        if (favSports.length > 0) {
          const favSport = favSports[0];
          setDraft((prev) => ({
            ...prev,
            sport: favSport,
          }));
        } else {
          setDraft((prev) => ({
            ...prev,
            sport: response.data[0].gid,
          }));
        }
        setStatus("success");
      } else {
        setStatus("error");
        setError(response.message);
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
    <CreateContext.Provider
      value={{
        draft,
        setDraft,
        setSection,
        section,
        status,
        sports,
        error,
      }}
    >
      {children}
    </CreateContext.Provider>
  );
};

export { CreateProvider };
export default CreateContext;
