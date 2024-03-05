import { useEffect } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// Navigator
import AppNavigator from "./src/navigation/AppNavigator";

// Store
import store, { persistor } from "./src/store/store";

// Theme
import TamaguiUI from "./src/theme/tamagui/TamaguiProvider";
import { PortalProvider } from "tamagui";
import { loadFonts } from "./src/theme/fonts";

export default function App() {
  useEffect(() => {
    loadFonts();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <TamaguiUI>
          <PortalProvider>
            <AppNavigator />
          </PortalProvider>
        </TamaguiUI>
      </PersistGate>
    </Provider>
  );
}
