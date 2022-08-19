import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../app/axios";

export const productApi = createAsyncThunk("fetchAllProduct", async () => {
  const response = await axios.get("/products");
  return response.data;
});

export const STATUSES = {
  IDEAL: "idle",
  PENDING: "pending",
  ERROR:"error"
};

const initialState = {
  products: [],
  status: STATUSES.IDEAL,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(productApi.pending, (state, action) => {
          state.status = STATUSES.PENDING;
      })
      .addCase(productApi.fulfilled, (state, action) => {
          state.status = STATUSES.IDEAL;
          state.products=action.payload
      })
      .addCase(productApi.rejected, (state, action) => {
          state.status = STATUSES.ERROR;
      });
  },
});


export const product= (state) => state.products
export const status = (state) => state.status
export default productSlice.reducer
