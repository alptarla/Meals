import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import MealItem from "../components/MealItem";

export default function FavoritesScreen() {
  const navigation = useNavigation();
  const { favoriteMeals } = useSelector((state) => state.meal);

  const selectMealHandler = (mealId) => {
    navigation.navigate("MealDetail", { mealId });
  };

  const renderMealItem = ({ item }) => (
    <MealItem meal={item} onSelectItem={selectMealHandler} />
  );

  return (
    <View style={styles.screen}>
      <FlatList data={favoriteMeals} renderItem={renderMealItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 15,
    backgroundColor: "white",
  },
});
