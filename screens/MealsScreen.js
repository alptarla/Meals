import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function MealsScreen() {
  const navigation = useNavigation()

  const goToCategoriesScreen = () => {
    navigation.navigate('Categories')
  }

  return (
    <View style={styles.screen}>
      <Text>Meals</Text>
      <Button title='Categories' onPress={goToCategoriesScreen} />
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