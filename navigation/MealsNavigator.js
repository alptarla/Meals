import { Feather, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import FavoritesScreen from "../screens/FavoritesScreen";
import MealsScreen from "../screens/MealsScreen";

const Tab = createBottomTabNavigator();

export default function MealsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#4a148c",
      }}
    >
      <Tab.Screen
        name="All"
        component={MealsScreen}
        options={{
          tabBarIcon: ({ size, color }) => {
            return <Feather name="list" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="star" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
