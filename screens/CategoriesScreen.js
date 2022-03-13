import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function CategoriesScreen() {
  const navigation = useNavigation()

  const goToMealsScreen = () => {
    navigation.navigate('Meals')
  }

  return (
    <View style={styles.screen}>
      <Text>Categories</Text>
      <Button title='Meals' onPress={goToMealsScreen} />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})