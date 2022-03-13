import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import MealItem from "../components/MealItem";
import { selectCategoryMeals } from "../store/meal-slice";

export default function MealsScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const meals = useSelector(selectCategoryMeals(route.params.categoryId));

  const selectMealHandler = (mealId) => {
    navigation.navigate("MealDetail", { mealId });
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
