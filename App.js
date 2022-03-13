import { useFonts } from "expo-font";
import React from "react";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import Navigation from "./navigation";
import store from "./store";

export default function App() {
  const [loaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!loaded) return null;

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

const styles = StyleSheet.create({});
