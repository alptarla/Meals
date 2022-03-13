import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

export default function CategoryItem({ onSelectItem, category }) {
  const selectItemHandler = () => {
    onSelectItem(category.id);
  };

  return (
    <Pressable
      onPress={selectItemHandler}
      style={{ ...styles.item, backgroundColor: category.color }}
    >
      <Text style={styles.title} numberOfLines={2}>
        {category.title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    height: 100,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  title: {
    // fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: "right",
  },
});
