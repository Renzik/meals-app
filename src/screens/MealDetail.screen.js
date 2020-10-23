import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import CustomHeaderButton from '../components/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { MEALS } from '../data/dummy-data';

const MealDetailScreen = ({ navigation }) => {
  const mealId = navigation.getParam('mealId');
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
      <Button
        title='all the way back'
        onPress={() => {
          navigation.replace('Categories');
        }}
      />
    </View>
  );
};

MealDetailScreen.navigationOptions = ({ navigation }) => {
  const mealId = navigation.getParam('mealId');
  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  let favorite = false;

  return {
    headerTitle: selectedMeal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title='Favorite'
          iconName='bookmark-border'
          onPress={() => console.log('favorited')}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MealDetailScreen;
