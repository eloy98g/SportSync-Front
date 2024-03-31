import React, {
  useState,
  useEffect,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";
import CREATE_ACTIVITY_SPORTS from "../../../../api/placeholders/CREATE_ACTIVITY_SPORTS";
import useStatus, { STATUS } from "../../../../hooks/useStatus";
import Draft from "../../../../store/types/draft/Draft";
import SportDraft from "../../../../store/types/draft/SportDraft";

// Sections
import { SectionName } from "../sections";

interface ContextProps {
  setDraft: Dispatch<SetStateAction<Draft>>;
  setSection: Dispatch<SetStateAction<SectionName>>;
  draft: Draft;
  section: SectionName;
  sports: SportDraft[];
  status: STATUS;
}

const INITIAL_DRAFT: Draft = {
  sport: 1,
  teams: 2,
  playersPerTeam: 1,
};

const INITIAL_DATA = {
  draft: INITIAL_DRAFT,
  setDraft: () => {},
  setSection: () => {},
  section: "sport" as SectionName,
  status: "idle" as STATUS,
  sports: [],
};

const CreateContext = createContext<ContextProps>(INITIAL_DATA);

interface Props {
  children: React.ReactNode;
}

const CreateProvider = ({ children }: Props) => {
  const [section, setSection] = useState<SectionName>("sport");
  const [draft, setDraft] = useState<Draft>(INITIAL_DRAFT);
  const [sports, setSports] = useState<SportDraft[]>([]);
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
