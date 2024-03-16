import React, { useState, useEffect } from "react";

// Components
import Sheet from "../../../../components/common/Sheet";

const AuthSheet = (props: any) => {
  const { section, setSection, children } = props;
  const [open, setOpen] = useState(false);

  console.log("open", open);
  console.log("section", section);

  useEffect(() => {
    console.log("effect open", open);
    console.log("effect section", open);

    if (section) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [section]);

  const openHandler = (value: boolean) => {
    if (value === false) {
      setSection();
      setOpen(false);
    }
  };

  return (
    <Sheet open={open} openHandler={openHandler} height={440}>
      {children}
    </Sheet>
  );
};

export default AuthSheet;
