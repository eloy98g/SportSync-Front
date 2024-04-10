import * as Location from "expo-location";

const getLocationPermissions = async () => {
  const { status } = await Location.requestForegroundPermissionsAsync();
  const { locationServicesEnabled } = await Location.getProviderStatusAsync();

  if (status === "granted" && locationServicesEnabled === true) {
    return true;
  } else {
    return false;
  }
};

export default getLocationPermissions;
