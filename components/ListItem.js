import React from "react";
import { StyleSheet, View } from "react-native";
import DefaultText from "./DefaultText";

export default function ListItem({ title }) {
  return (
    <View style={styles.item}>
      <DefaultText>{title}</DefaultText>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});
