export const environment = "dev"; //dev || prod

export const baseVersion = "0.4.0";
const date = "170324";

export const version =
  environment === "dev"
    ? `${baseVersion}-dev-${date}`
    : `${baseVersion}.${date}`;
