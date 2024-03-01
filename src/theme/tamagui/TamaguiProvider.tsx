import { TamaguiProvider } from "@tamagui/core";
import tamaguiConfig from "./tamagui.config";
// make TypeScript type everything based on your config
type Conf = typeof tamaguiConfig;
declare module "@tamagui/core" {
  interface TamaguiCustomConfig extends Conf {}
}

const TamaguiUI = ({ children }: any) => {
  return <TamaguiProvider config={tamaguiConfig}>{children}</TamaguiProvider>;
};

export default TamaguiUI;
