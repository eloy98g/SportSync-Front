import React from "react";

// Components
import Create from "./Create";

// Context
import { CreateProvider } from "./context/CreateContext";
import BackHeader from "../../../components/BackHeader";

const CreateActivity = () => {
  return (
    <CreateProvider>
      <BackHeader title="Crear" />
      <Create />
    </CreateProvider>
  );
};

export default CreateActivity;
