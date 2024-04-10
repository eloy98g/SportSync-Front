import { reverseGeocodeAsync } from "expo-location";

import Location from "../../store/types/location/Location";

const getAddress = async (location: Location) => {
  try {
    const { latitude, longitude } = location;

    const address = await reverseGeocodeAsync({
      latitude,
      longitude,
    });

    const finalAddress = address
      ? `${address[0].street || address[0].name}, ${
          address[0].city || address[0].subregion
        }`
      : "";

    console.log('finalAddress',finalAddress)
    return finalAddress;
  } catch (error) {
    console.log("error", error.message);
    return "";
  }
};

export default getAddress;
