import React, {
  useState,
  useEffect,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";

// Api placeholder
import CREATE_ACTIVITY_SPORTS from "../../../../api/placeholders/CREATE_ACTIVITY_SPORTS";

// Hooks
import useStatus, { STATUS } from "../../../../hooks/useStatus";

// Initial State
import INITIAL_DATA, { INITIAL_DRAFT } from "./initialState";

// Sections
import { SectionName } from "../sections";

// Types
import Draft from "../../../../store/types/draft/Draft";
import Sport from "../../../../store/types/sport/Sport";

interface ContextProps {
  setDraft: Dispatch<SetStateAction<Draft>>;
  setSection: Dispatch<SetStateAction<SectionName>>;
  draft: Draft;
  section: SectionName;
  sports: Sport[];
  status: STATUS;
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

  useEffect(() => {
    // Todo: Api call for sports
    // TODO: error handling
    setStatus("loading");
    setTimeout(() => {
      setSports(CREATE_ACTIVITY_SPORTS);
      setStatus("success");
    }, 1000);
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
      }}
    >
      {children}
    </CreateContext.Provider>
  );
};

export { CreateProvider };
export default CreateContext;
