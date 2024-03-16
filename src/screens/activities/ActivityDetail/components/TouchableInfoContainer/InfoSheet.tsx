import React from "react";

// Components
import Sheet from "../../../../../components/common/Sheet";

interface Props {
  open: boolean;
  setOpen: (T: any) => void;
  children: any;
}
const InfoSheet = ({ open, setOpen, children }: Props) => {
  const openHandler = () => {
    setOpen(!open);
  };

  return (
    <Sheet open={open} openHandler={openHandler} height={240}>
      {children}
    </Sheet>
  );
};

export default InfoSheet;
