import React from "react";

// Components
import Sheet from "../../../../../components/common/Sheet";

interface Props {
  open: boolean;
  setOpen: (T: boolean | string) => void;
  children: React.ReactNode;
}

const InfoSheet = ({ open, setOpen, children }: Props) => {
  const openHandler = () => {
    setOpen(!open);
  };

  return (
    <Sheet open={open} openHandler={openHandler} modal>
      {children}
    </Sheet>
  );
};

export default InfoSheet;
