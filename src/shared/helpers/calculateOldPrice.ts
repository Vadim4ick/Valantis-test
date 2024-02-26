export const calculateOldPrice = (price: number): number => {
  const randomDiscount = 1 - Math.random() * 0.25;

  const oldPrice = price / randomDiscount;

  return Math.round(oldPrice * 100) / 100;
};
