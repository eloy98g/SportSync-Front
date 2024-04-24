export const environment = "dev"; //dev || prod

export const baseVersion = "0.4.0";
const date = "170324";

export const url = "https://sport.up.railway.app"

export const version =
  environment === "dev"
    ? `${baseVersion}-dev-${date}`
    : `${baseVersion}.${date}`;
