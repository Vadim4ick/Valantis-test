import { xAuth } from "@/shared/helpers/xAuth";
import axios from "axios";

export const $api = axios.create({
  baseURL: "https://api.valantis.store:41000",
  headers: {
    "X-Auth": xAuth,
  },
});
