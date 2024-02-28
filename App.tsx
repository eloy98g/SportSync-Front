import { useEffect } from "react";

// Navigator
import AppNavigator from "./src/navigation/AppNavigator";

// Theme
import { loadFonts } from "./src/theme/fonts";
import TamaguiUI from "./src/theme/tamagui/TamaguiProvider";

export default function App() {
  useEffect(() => {
    loadFonts();
  }, []);

  return (
    <TamaguiUI>
      <AppNavigator />
    </TamaguiUI>
  );
}
