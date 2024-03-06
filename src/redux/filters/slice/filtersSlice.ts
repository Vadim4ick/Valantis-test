import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Filters } from "../type";
import { fetchAllBrands } from "../services/fetchAllBrands";

const initialState: Filters = {
  searchText: null,
  allBrands: [],
  activeBrand: null,
  minPrice: null,
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },

    setActiveBrand: (state, action: PayloadAction<string>) => {
      state.activeBrand = action.payload;
    },

    setMinPrice: (state, action: PayloadAction<number>) => {
      state.minPrice = action.payload;
    },

    removeFilters: (state) => {
      state.minPrice = null;
      state.searchText = null;
      state.activeBrand = null;
    },
  },

  extraReducers: (builder) => {
    // builder.addCase(fetchAllBrands.pending, (state) => {
    //   state.error = undefined;
    //   state.isLoading = true;
    // });
    builder.addCase(
      fetchAllBrands.fulfilled,
      (state, action: PayloadAction<string[]>) => {
        state.allBrands = action.payload;
      }
    );
    // builder.addCase(fetchAllBrands.rejected, (state, action) => {
    //   // state.isLoading = false;
    //   // state.error = action.payload as string;
    // });
  },
});

export const filtersActions = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
