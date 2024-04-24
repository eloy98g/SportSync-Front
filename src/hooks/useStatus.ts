import { useState } from "react";

export type STATUS = "idle" | "loading" | "success" | "empty" | "error";

const useStatus = () => {
  const [status, setStatus] = useState<STATUS>("idle");
  return { status, setStatus };
};

export default useStatus;
