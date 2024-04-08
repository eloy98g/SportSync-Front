import Location from "../../store/types/location/Location";

const distanceBetween = (loc1: Location, loc2: Location) => {
  const earthRadius = 6371000;
  const lat1 = (loc1.latitude * Math.PI) / 180;
  const lat2 = (loc2.latitude * Math.PI) / 180;
  const latDifference = ((loc2.latitude - loc1.latitude) * Math.PI) / 180;
  const longDifference = ((loc2.longitude - loc1.longitude) * Math.PI) / 180;

  const a =
    Math.sin(latDifference / 2) * Math.sin(latDifference / 2) +
    Math.cos(lat1) *
      Math.cos(lat2) *
      Math.sin(longDifference / 2) *
      Math.sin(longDifference / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = earthRadius * c;
  return distance;
};

export default distanceBetween;
