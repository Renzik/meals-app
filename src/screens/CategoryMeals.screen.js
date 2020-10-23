import React from 'react';
import { FlatList, StyleSheet, Text, View, Platform } from 'react-native';
import { HeaderTitle } from 'react-navigation-stack';

import theme from '../../constants/Colors';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const CategoryMeals = ({ navigation }) => {
  const categoryId = navigation.getParam('categoryId');
  const displayedMeals = MEALS.filter(meals => meals.categoryIds.includes(categoryId));

  const renderMealItem = meal => (
    <MealItem
      itemData={meal}
      onSelect={() => {
        navigation.navigate({
          routeName: 'MealDetail',
          params: {
            mealId: meal.item.id,
          },
        });
      }}
    />
  );

  return (
    <View style={styles.screen}>
      <FlatList style={styles.mealItemList} data={displayedMeals} renderItem={renderMealItem} />
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
    padding: 15,
  },
  mealItemList: {
    width: '100%',
  },
});

export default CategoryMeals;
