import React, { useState, createContext } from "react";

// Sections
import { SectionName } from "../sections";

const CreateContext = createContext<any>({});

interface Props {
  children: React.ReactNode;
}

const CreateProvider = ({ children }: Props) => {
  const [section, setSection] = useState<SectionName>("sport");
  const [draft, setDraft] = useState(); 

  return (
    <CreateContext.Provider value={{ draft, setDraft, setSection, section }}>
      {children}
    </CreateContext.Provider>
  );
};

export { CreateProvider };
export default CreateContext;
