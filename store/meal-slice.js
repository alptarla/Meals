import { createSlice } from "@reduxjs/toolkit";
import { Meals } from "../dummy-data";

const mealSlice = createSlice({
  name: "meals",
  initialState: {
    meals: Meals,
  },
});

function selectCategoryMeals(catId) {
  return ({ meal }) => {
    return meal.meals.filter((m) => m.categoryIds.includes(catId));
  };
}

export default mealSlice.reducer;
export { selectCategoryMeals };
