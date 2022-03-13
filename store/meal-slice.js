import { createSlice } from "@reduxjs/toolkit";
import { Meals } from "../dummy-data";

const mealSlice = createSlice({
  name: "meals",
  initialState: {
    meals: Meals,
    favoriteMeals: [],
  },
  reducers: {
    toggleFavoriteMeal(state, { payload }) {
      const { favoriteMeals } = state;
      if (favoriteMeals.some((fav) => fav.id === payload.id)) {
        state.favoriteMeals = favoriteMeals.filter(
          (fav) => fav.id !== payload.id
        );
        return;
      }

      state.favoriteMeals.push(payload);
    },
  },
});

function selectCategoryMeals(catId) {
  return ({ meal }) => {
    return meal.meals.filter((m) => m.categoryIds.includes(catId));
  };
}

function selectMeal(id) {
  return ({ meal }) => {
    return meal.meals.find((m) => m.id === id);
  };
}

export { selectCategoryMeals, selectMeal };
export const { toggleFavoriteMeal } = mealSlice.actions;
export default mealSlice.reducer;
