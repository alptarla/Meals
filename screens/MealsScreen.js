import { useRoute } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function MealsScreen() {
  const route = useRoute();

  console.log("selected", route.params.categoryId);

  return (
    <View style={styles.screen}>
      <Text>Meals</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
