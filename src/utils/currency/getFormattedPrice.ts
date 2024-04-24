import currencyFormatter from "currency-formatter";


const getFormattedPrice = (amount: number, currency = "EUR") => {
  const price = Math.floor(amount) / 100;
  const formatted = currencyFormatter.format(price, { code: currency });
  return formatted;
};

export default getFormattedPrice