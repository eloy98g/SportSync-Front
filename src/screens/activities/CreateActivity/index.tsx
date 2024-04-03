import React from "react";

// Components
import Create from "./Create";

// Context
import { CreateProvider } from "./context/CreateContext";

const CreateActivity = () => {
  return (
    <CreateProvider>
      <Create />
    </CreateProvider>
  );
};

export default CreateActivity;
