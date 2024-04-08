const formattedDistance = (distance: number) => {
  if (distance < 1000) {
    return distance.toFixed(0) + " m";
  } else {
    const distanciaEnKm = distance / 1000;
    return distanciaEnKm.toFixed(2) + " km";
  }
};

export default formattedDistance;
