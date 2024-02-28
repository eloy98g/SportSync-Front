import { TamaguiProvider, createTamagui } from "@tamagui/core";
import { config } from "@tamagui/config/v3";

// you usually export this from a tamagui.config.ts file
const tamaguiConfig = createTamagui(config);

// make TypeScript type everything based on your config
type Conf = typeof tamaguiConfig;
declare module "@tamagui/core" {
  interface TamaguiCustomConfig extends Conf {}
}

const TamaguiUI = ({ children }: any) => {
  return <TamaguiProvider config={tamaguiConfig}>{children}</TamaguiProvider>;
};

export default TamaguiUI;
