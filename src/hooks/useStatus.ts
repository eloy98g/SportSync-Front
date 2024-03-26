import { useState } from "react";

type STATUS = "idle" | "loading" | "success" | "error";

const useStatus = () => {
  const [status, setStatus] = useState<STATUS>("idle");
  return { status, setStatus };
};

export default useStatus;
