
const showConfirmationQR = (startDate?: number, duration?: number) => {
  if(!startDate || !duration) return false

  const margin = 2 * 60 * 60 * 1000;
  
  // Calcula el rango permitido
  const lowerBound = startDate - margin;
  const upperBound = startDate+ margin + (duration * 60 * 1000);
  
  const currentTime = new Date().getTime();
  const isInRange = currentTime >= lowerBound && currentTime <= upperBound;
  
  return isInRange
}

export default showConfirmationQR