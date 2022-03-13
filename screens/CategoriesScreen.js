import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

export default function CategoriesScreen() {
  const {categories} = useSelector(state => state.category)

  const navigation = useNavigation()

  const goToMealsScreen = () => {
    navigation.navigate('Meals')
  }

  console.log('categories', categories)

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