import { useState, useEffect } from "react";
import { useWindowDimensions } from "react-native";

// Theme
import { TABLET } from "../theme/breakPoints";

export type ScreenDimension = "wide" | "narrow";

const useScreenDimension = () => {
  const [screenDimension, setScreenDimension] =
    useState<ScreenDimension>("narrow");

  const width = useWindowDimensions().width;

  useEffect(() => {
    const narrowScreen = width < TABLET;
    if (narrowScreen) {
      setScreenDimension("narrow");
    } else {
      setScreenDimension("wide");
    }
  }, [width]);

  return { screenDimension, setScreenDimension };
};

export default useScreenDimension;
