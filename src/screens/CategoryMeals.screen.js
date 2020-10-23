import React from 'react';
import { Button, StyleSheet, Text, View, Platform } from 'react-native';
import { HeaderTitle } from 'react-navigation-stack';

import { CATEGORIES } from '../data/dummy-data';
import theme from '../../constants/Colors';

const CategoryMeals = ({ navigation }) => {
  const categoryId = navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(category => category.id === categoryId);

  return (
    <View style={styles.screen}>
      <Text>The Category Meals Screen</Text>
      <Button
        title='Go to meal detail'
        onPress={() => {
          props.navigation.navigate('MealDetail');
        }}
      />
      <Text>{selectedCategory.title}</Text>
      <Button title='GO BACK' onPress={() => props.navigation.goBack()} />
    </View>
  );
};

CategoryMeals.navigationOptions = ({ navigation }) => {
  const categoryId = navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(category => category.id === categoryId);
  return { headerTitle: selectedCategory.title };
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CategoryMeals;
