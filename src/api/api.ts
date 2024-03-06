import { xAuth } from "@/shared/helpers/xAuth";
import axios from "axios";

export const $api = axios.create({
  baseURL: "http://api.valantis.store:40000",
  headers: {
    "X-Auth": xAuth,
  },
});
