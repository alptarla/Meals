import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import CategoryItem from "../components/CategoryItem";

export default function CategoriesScreen() {
  const { categories } = useSelector((state) => state.category);
  const navigation = useNavigation();

  const selectCategoryHandler = (catId) => {
    navigation.navigate("Meals", { categoryId: catId });
  };

  const renderCategoryItems = ({ item }) => (
    <CategoryItem onSelectItem={selectCategoryHandler} category={item} />
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={categories}
        renderItem={renderCategoryItems}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
