import { getCurrentPositionAsync } from "expo-location";
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
    const { coords } = await getCurrentPositionAsync();

    const { latitude, longitude } = coords;

    location.latitude = latitude;
    location.longitude = longitude;

    const address = await getAddress(location);
    location.address = address;

    return location;
  } catch (e) {
    console.log("error fetching location", e.message);
    return location;
  }
};

export default getLocation;
