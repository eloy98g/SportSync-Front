import PriceSlot from "../types/PriceSlot";

const priceValues: { value: PriceSlot; label: string }[] = [
  { value: "0-5€", label: "0 - 5€" },
  { value: "5€-10€", label: "5€ - 10€" },
  { value: "10€-15€", label: "10€ - 15€" },
  { value: "+15€", label: "más de 15€" },
];

export default priceValues;
