type Location = {
  latitude: number;
  longitude: number;
  latitudeDelta?: number;
  longitudeDelta?: number;
  address?: string;
};

const EMPTY_LOCATION = {
  address: "",
  latitude: 0,
  longitude: 0,
  latitudeDelta: 0.1,
  longitudeDelta: 0.1,
};

export { EMPTY_LOCATION };
export default Location;
