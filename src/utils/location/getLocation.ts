import {
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
} from "expo-location";
import Location from "../../store/types/location/Location";
import getAddress from "./getAddress";

const getLocation = async () => {
  const location: Location = {
    latitude: 40.4165,
    longitude: -3.70256,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  };

  try {
    console.log("1");
    let { status } = await requestForegroundPermissionsAsync();
    console.log("2", status);
    if (status !== "granted") {
      return location;
    }
    console.log("3");
    const locationPromise = new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        clearTimeout(timeout);
        reject(new Error("Timeout exceeded while fetching location."));
      }, 2000);
      getCurrentPositionAsync()
        .then((position) => {
          clearTimeout(timeout);
          resolve(position);
        })
        .catch((error) => {
          clearTimeout(timeout);
          reject(error);
        });
    });

    const position = await Promise.race([locationPromise]);
    console.log("4");
    const { coords } = position;
    const { latitude, longitude } = coords;

    location.latitude = latitude;
    location.longitude = longitude;

    const address = await getAddress(location);
    location.address = address;

    return location;
  } catch (e: any) {
    console.log("[error] fetching location", e.message);
    return location;
  }
};

export default getLocation;
