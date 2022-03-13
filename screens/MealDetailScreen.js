import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import DefaultText from "../components/DefaultText";
import ListItem from "../components/ListItem";
import { selectMeal, toggleFavoriteMeal } from "../store/meal-slice";

export default function MealDetailScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();

  const meal = useSelector(selectMeal(route.params.mealId));
  const { favoriteMeals } = useSelector((state) => state.meal);

  const isFavorite = favoriteMeals.some((fav) => {
    return fav.id === route.params.mealId;
  });

  const toggleFavoriteHandler = () => {
    dispatch(toggleFavoriteMeal(meal));
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ({ tintColor }) => {
        return (
          <TouchableOpacity onPress={toggleFavoriteHandler}>
            <Ionicons
              name={isFavorite ? "star" : "star-outline"}
              color={tintColor}
              size={24}
            />
          </TouchableOpacity>
        );
      },
    });
  }, [navigation, isFavorite]);

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
