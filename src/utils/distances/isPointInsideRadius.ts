// Methods
import distanceBetween from "./distanceBetween";

// Types
import Location from "../../store/types/location/Location";

const isPointInsideRadius = (location: Location, point: Location) => {
  const distancia = distanceBetween(location, point);
  return distancia <= (location.radius || 0);
};

export default isPointInsideRadius;
