import { Item } from "../types";

export const getUniqueItemsById = (items: Item[]) => {
  const uniqueItemsById = new Map();

  items.forEach((item) => {
    if (!uniqueItemsById.has(item.id)) {
      uniqueItemsById.set(item.id, item);
    }
  });

  return Array.from(uniqueItemsById.values());
};

export const getUniqueIds = (ids: string[]) => {
  const uniqueIds = new Set(ids);

  return Array.from(uniqueIds);
};
