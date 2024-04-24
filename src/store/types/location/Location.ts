type Location = {
  latitude: number;
  longitude: number;
  latitudeDelta?: number;
  longitudeDelta?: number;
  address?: string;
  radius?: number;
};

const EMPTY_LOCATION = {
  address: "",
  latitude: 0,
  longitude: 0,
  latitudeDelta: 0.1,
  longitudeDelta: 0.1,
  radius: 5000,
};

export { EMPTY_LOCATION };
export default Location;
