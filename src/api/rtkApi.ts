import { getUniqueItemsById } from "@/shared/helpers/getUniqueItemsById";
import { xAuth } from "@/shared/helpers/xAuth";
import { Filter, Item } from "@/shared/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

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
    // getIdsSearch: build.mutation<{ result: string[] }, string>({
    //   query: (filterString) => ({
    //     url: `/`,
    //     method: "POST",
    //     body: {
    //       action: "filter",
    //       params: {
    //         product: filterString,
    //       },
    //     },
    //   }),
    // }),

    // getIdsBrand: build.mutation<{ result: string[] }, string>({
    //   query: (filterBrand) => ({
    //     url: `/`,
    //     method: "POST",
    //     body: {
    //       action: "filter",
    //       params: {
    //         brand: filterBrand,
    //       },
    //     },
    //   }),
    // }),

    // getIdsPrice: build.mutation<{ result: string[] }, number>({
    //   query: (filterPrice) => ({
    //     url: `/`,
    //     method: "POST",
    //     body: {
    //       action: "filter",
    //       params: {
    //         price: filterPrice,
    //       },
    //     },
    //   }),
    // }),

    getFilters: build.mutation<
      { result: string[] },
      { filter: Filter; value: string | number }
    >({
      query: ({ filter, value }) => {
        switch (filter) {
          case "brand":
            return {
              url: `/`,
              method: "POST",
              body: {
                action: "filter",
                params: {
                  brand: value,
                },
              },
            };
          case "price":
            return {
              url: `/`,
              method: "POST",
              body: {
                action: "filter",
                params: {
                  price: value,
                },
              },
            };

          default:
            return {
              url: `/`,
              method: "POST",
              body: {
                action: "filter",
                params: {
                  product: value,
                },
              },
            };
        }
      },
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

    getInfoValue: build.mutation<{ result: string[] }, null>({
      query: () => ({
        url: `/`,
        method: "POST",
        body: {
          action: "get_fields",
          params: { field: "brand" },
        },
      }),

      transformResponse: (response: { result: string[] }) => {
        const newArray = response.result.filter((el) => Boolean(el));

        return { result: newArray };
      },
    }),
  }),
});

// export const getIdsSearch = rtkApi.useGetIdsSearchMutation;
// export const getIdsBrand = rtkApi.useGetIdsBrandMutation;
// export const getIdsPrice = rtkApi.useGetIdsPriceMutation;
export const getFilters = rtkApi.useGetFiltersMutation;

export const getItems = rtkApi.useGetItemsMutation;
export const getInfoValue = rtkApi.useGetInfoValueMutation;
