import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import {
  Nunito_400Regular,
  Nunito_800ExtraBold,
  Nunito_300Light,
  Nunito_600SemiBold,
} from "@expo-google-fonts/nunito";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export async function loadFonts(): Promise<boolean> {
  try {
    await Font.loadAsync({
      "nunito-bold": Nunito_800ExtraBold,
      "nunito-book": Nunito_400Regular,
      "nunito-light": Nunito_300Light,
      "nunito-semibold": Nunito_600SemiBold,
    });
  } catch (error) {
    console.log("[error] loadingFonts:", error.message);
    return false;
  } finally {
    await SplashScreen.hideAsync();
    return true;
  }
}

export const family = {
  bold: "nunito-bold",
  normal: "nunito-book",
  light: "nunito-light",
  semibold: "nunito-semibold",
};