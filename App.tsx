import { useEffect } from "react";
import * as Linking from "expo-linking";
import { Provider } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { PersistGate } from "redux-persist/integration/react";
import { PortalProvider } from "tamagui";

// Navigator
import AppNavigator from "./src/navigation/AppNavigator";

// Store
import store, { persistor } from "./src/store/store";

// Theme
import TamaguiUI from "./src/theme/tamagui/TamaguiProvider";
import { loadFonts } from "./src/theme/fonts";

export default function App() {
  const navigation = useNavigation();
  useEffect(() => {
    loadFonts();
  }, []);

  useEffect(() => {
    const handleDeepLink = ({ url }: any) => {
      const { path, queryParams } = Linking.parse(url);

      if (path === "sportup" && queryParams?.gid) {
        navigation.navigate(
          "ActivityDetail" as never,
          { gid: queryParams.gid } as never
        );
      }
    };

    Linking.addEventListener("url", handleDeepLink);
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
