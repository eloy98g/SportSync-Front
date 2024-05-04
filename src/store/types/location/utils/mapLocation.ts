import Location from "../Location";

const mapLocation = (data: any): Location => {
  const newLocation: Location = {
    latitude: data?.latitude || 40.4165,
    longitude: data?.longitude || -3.70256,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
    address: data?.address || "",
    radius: data?.radius || 1000,
  };
  return newLocation;
};

export default mapLocation;
