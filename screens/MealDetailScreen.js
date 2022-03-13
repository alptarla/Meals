import { useRoute } from "@react-navigation/native";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import DefaultText from "../components/DefaultText";
import ListItem from "../components/ListItem";
import { selectMeal } from "../store/meal-slice";

export default function MealDetailScreen() {
  const route = useRoute();
  const meal = useSelector(selectMeal(route.params.mealId));

  return (
    <ScrollView style={styles.screen}>
      <Image source={{ uri: meal.imageUrl }} style={styles.mealImage} />
      <View style={styles.mealDetails}>
        <DefaultText>{`${meal.duration}m`}</DefaultText>
        <DefaultText>{meal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{meal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.sectionTitle}>Ingredients</Text>
      {meal.ingredients.map((ingredient, i) => (
        <ListItem title={ingredient} key={i} />
      ))}
      <Text style={styles.sectionTitle}>Steps</Text>
      {meal.steps.map((step, i) => (
        <ListItem title={step} key={i} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
  },
  mealImage: {
    width: "100%",
    height: 200,
  },
  mealDetails: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
    backgroundColor: "#f5f5f5",
    marginBottom: 5,
  },
  sectionTitle: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
});
