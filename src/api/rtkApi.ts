import { getUniqueItemsById } from "@/shared/helpers/getUniqueItemsById";
import { Item } from "@/shared/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import md5 from "md5";

const timestamp = new Date().toISOString().slice(0, 10).replace(/-/g, ""); // Получаем текущий таймштамп в формате ГГГГММДД
const password = "Valantis"; // Пароль для доступа к API
const authString = `${password}_${timestamp}`;
const xAuth = md5(authString); // Вычисляем MD5-хэш от пароля и таймштампа

export const rtkApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://api.valantis.store:40000",
    prepareHeaders: (headers) => {
      headers.set("X-Auth", xAuth);
      return headers;
    },
  }),

  endpoints: (build) => ({
    getIds: build.mutation<{ result: string[] }, string>({
      query: (filter) => ({
        url: `/`,
        method: "POST",
        body: {
          action: "filter",
          params: { product: filter },
        },
      }),
    }),

    getItems: build.mutation<{ result: Item[] }, string[]>({
      query: (ids) => ({
        url: `/`,
        method: "POST",
        body: {
          action: "get_items",
          params: { ids },
        },
      }),
      extraOptions: {
        maxRetries: 8,
      },

      transformResponse: (response: { result: Item[] }) => {
        const newArray = getUniqueItemsById(response.result);

        return { result: newArray };
      },
    }),
  }),
});

export const getIds = rtkApi.useGetIdsMutation;
export const getItems = rtkApi.useGetItemsMutation;