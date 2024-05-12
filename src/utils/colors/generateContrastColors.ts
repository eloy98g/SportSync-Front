function getRandomColor() {
  // Genera un color aleatorio en formato hexadecimal
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function getContrastColor(color: string) {
  // Convierte el color hexadecimal a RGB
  let r = parseInt(color.substr(1, 2), 16);
  let g = parseInt(color.substr(3, 2), 16);
  let b = parseInt(color.substr(5, 2), 16);

  // Calcula la luminosidad según la fórmula de W3C
  let luminosidad = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  // Determina si el color es oscuro o claro
  return luminosidad > 0.5 ? "#000000" : "#ffffff";
}

export default function generateContrastColors() {
  let color1 = getRandomColor();
  let color2 = getContrastColor(color1);
  return [color1, color2];
}
