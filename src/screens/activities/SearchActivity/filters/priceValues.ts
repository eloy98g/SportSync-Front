import PriceSlot from "../types/PriceSlot";

const priceValues: { value: PriceSlot; label: string }[] = [
  { value: "0€", label: "Gratis" },
  { value: "1€-5€", label: "1€ - 5€" },
  { value: "5€-10€", label: "5€ - 10€" },
  { value: "10€-15€", label: "10€ - 15€" },
  { value: "+15€", label: "más de 15€" },
];

export default priceValues;
