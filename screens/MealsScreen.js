import { useRoute } from "@react-navigation/native";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import MealItem from "../components/MealItem";
import { selectCategoryMeals } from "../store/meal-slice";

export default function MealsScreen() {
  const route = useRoute();
  const meals = useSelector(selectCategoryMeals(route.params.categoryId));

  const selectMealHandler = (mealId) => {
    console.log("mealId", mealId);
  };

  const renderMealItem = ({ item }) => (
    <MealItem meal={item} onSelectItem={selectMealHandler} />
  );

  return (
    <View style={styles.screen}>
      <FlatList data={meals} renderItem={renderMealItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
    padding: 15,
  },
});
