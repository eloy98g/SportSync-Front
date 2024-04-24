import PriceSlot from "../types/PriceSlot";

const insideRangePrice = (activityPrice: number, range: PriceSlot) => {
  if (range === "0€" && activityPrice === 0) {
    return true;
  } else if (range === "+15€" && activityPrice > 1500) {
    return true;
  } else {
    if (range) {
      const prices = range.match(/\d+/g) || "0";
      const lowPrice = parseInt(prices[0]) * 100;
      const highPrice = parseInt(prices[1]) * 100;

      if (activityPrice >= lowPrice && activityPrice <= highPrice) {
        return true;
      }
    }
  }
};

export default insideRangePrice;
