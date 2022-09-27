import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAllProducts: any = createAsyncThunk(
  "api/products/getAllProducts",
  async () => {
    const response: any = await fetch(
      "http://localhost:3000/api/products/getAllProducts"
    );
    return response.json();
  }
);

export const fetchAllCategory: any = createAsyncThunk(
  "api/products/category",
  async () => {
    const response = await fetch("http://localhost:3000/api/products/category");
    return response.json();
  }
);
const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isLoading: true,
    error: "",
    categories: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(fetchAllCategory.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

// export const {} = productSlice.actions;

export default productSlice.reducer;
