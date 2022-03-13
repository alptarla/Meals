import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./category-slice";
import mealSlice from "./meal-slice";

const store = configureStore({
  reducer: {
    category: categorySlice,
    meal: mealSlice,
  },
});

export default store;
