import { createSlice } from "@reduxjs/toolkit";
import { Categories } from "../dummy-data";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    categories: Categories,
    selectedCategory: null,
  },
});

export default categorySlice.reducer;
