import { $api } from "@/api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllBrands = createAsyncThunk(
  "redux/fetchAllBrands",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;

    try {
      const response = await $api.post<{ result: string[] }>(`/`, {
        action: "get_fields",
        params: { field: "brand" },
      });

      if (!response.data) {
        throw new Error();
      }

      // Фильтруем исключая null и повторения
      const newArray = [
        ...new Set(response.data.result.filter((el) => Boolean(el))),
      ];

      return newArray;
    } catch (error) {
      console.log(error);
      return rejectWithValue("error");
    }
  }
);
