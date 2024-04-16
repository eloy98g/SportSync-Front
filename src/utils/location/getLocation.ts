import {
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
} from "expo-location";
import Location from "../../store/types/location/Location";
import getAddress from "./getAddress";

const getLocation = async () => {
  const location: Location = {
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  };

  try {
    console.log("aa 1");
    let { status } = await requestForegroundPermissionsAsync();
    if (status !== "granted") {
      return location;
    }
    const { coords } = await getCurrentPositionAsync();

    console.log("aa 2");
    const { latitude, longitude } = coords;

    location.latitude = latitude;
    location.longitude = longitude;

    console.log("aa 3");
    const address = await getAddress(location);
    console.log("aa 4");
    location.address = address;

    return location;
  } catch (e) {
    console.log("error fetching location", e.message);
    console.log("aa 5");
    return location;
  }
};

export default getLocation;
