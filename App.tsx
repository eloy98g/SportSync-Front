import { useEffect } from "react";
import { Provider } from "react-redux";

// Navigator
import AppNavigator from "./src/navigation/AppNavigator";

// Theme
import { loadFonts } from "./src/theme/fonts";
import { PortalProvider } from "tamagui";
import TamaguiUI from "./src/theme/tamagui/TamaguiProvider";

import store from "./src/store/store";

export default function App() {
  useEffect(() => {
    loadFonts();
  }, []);

  return (
    <Provider store={store}>
      <TamaguiUI>
        <PortalProvider>
          <AppNavigator />
        </PortalProvider>
      </TamaguiUI>
    </Provider>
  );
}
