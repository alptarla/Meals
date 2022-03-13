import React from "react";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function MealItem({ meal, onSelectItem }) {
  const selectItemHandler = () => {
    onSelectItem(meal.id);
  };

  return (
    <Pressable onPress={selectItemHandler}>
      <View style={styles.meal}>
        <ImageBackground
          source={{ uri: meal.imageUrl }}
          style={styles.mealBgImage}
        >
          <View style={styles.mealTitleWrapper}>
            <Text style={styles.mealTitle} numberOfLines={1}>
              {meal.title}
            </Text>
          </View>
        </ImageBackground>
        <View style={styles.mealDetails}>
          <Text>{`${meal.duration}m`}</Text>
          <Text>{meal.complexity.toUpperCase()}</Text>
          <Text>{meal.affordability.toUpperCase()}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  meal: {
    width: "100%",
    height: 200,
    overflow: "hidden",
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: "#f5f5f5",
  },
  mealBgImage: {
    flex: 1,
    justifyContent: "flex-end",
  },
  mealTitleWrapper: {
    backgroundColor: "black",
    opacity: 0.7,
    paddingVertical: 10,
    marginTop: "auto",
  },
  mealTitle: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  mealDetails: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
  },
});
