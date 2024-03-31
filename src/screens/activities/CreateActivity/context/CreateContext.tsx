import React, {
  useState,
  useEffect,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";
import CREATE_ACTIVITY_SPORTS from "../../../../api/placeholders/CREATE_ACTIVITY_SPORTS";
import useStatus, { STATUS } from "../../../../hooks/useStatus";
import SportDraft from "../../../../store/types/draft/SportDraft";

// Sections
import { SectionName } from "../sections";

interface ContextProps {
  draft: any;
  setDraft: Dispatch<SetStateAction<any>>;
  setSection: Dispatch<SetStateAction<SectionName>>;
  section: SectionName;
  sports: SportDraft[];
  status: STATUS;
}

const INITIAL_DATA = {
  draft: null,
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
  const [draft, setDraft] = useState();
  const [sports, setSports] = useState<SportDraft[]>([]);
  const { status, setStatus } = useStatus();

  useEffect(() => {
    // Todo: Api call for sports
    setStatus("loading");
    setTimeout(() => {
      setSports(CREATE_ACTIVITY_SPORTS);
      setStatus("success");
    }, 1000);
  }, []);

  return (
    <CreateContext.Provider
      value={{ draft, setDraft, setSection, section, status, sports }}
    >
      {children}
    </CreateContext.Provider>
  );
};

export { CreateProvider };
export default CreateContext;
