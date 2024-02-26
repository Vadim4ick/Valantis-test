import { $api } from "../api/api";
import { Item } from "../shared/types";

export class ItemsService {
  static async getIds(): Promise<{ result: string[] }> {
    const res = await $api.post("/", {
      action: "get_ids",
      params: { offset: 0, limit: 51 },
    });

    return res.data;
  }

  static async getItems(ids: string[]): Promise<{ result: Item[] }> {
    const res = await $api.post("/", {
      action: "get_items",
      params: { ids },
    });

    return res.data;
  }

  static async filteredItems(filter: string): Promise<{ result: string[] }> {
    const res = await $api.post("/", {
      action: "filter",
      params: { product: filter },
    });

    return res.data;
  }
}
