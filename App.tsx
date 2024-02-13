import { useEffect } from "react";
import { FooterProvider } from "./src/components/Footer/FooterContext";

// Navigator
import AppNavigator from "./src/navigation/AppNavigator";

// Theme
import { loadFonts } from "./src/theme/fonts";

export default function App() {
  useEffect(() => {
    loadFonts();
  }, []);

  return <AppNavigator />;
}
