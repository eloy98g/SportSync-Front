import React from "react";

// Components
import BackHeader from "../../../components/BackHeader";
import Create from "./Create";

// Context
import { CreateProvider } from "./context/CreateContext";

const CreateActivity = () => {
  return (
    <CreateProvider>
      <BackHeader title="Crear" />
      <Create />
    </CreateProvider>
  );
};

export default CreateActivity;
