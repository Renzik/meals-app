import React from 'react';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';
import MealList from '../components/MealList';

const CategoryMeals = ({ navigation }) => {
  const categoryId = navigation.getParam('categoryId');
  const displayedMeals = MEALS.filter(meals => meals.categoryIds.includes(categoryId));

  return <MealList navigation={navigation} data={displayedMeals} />;
};

CategoryMeals.navigationOptions = ({ navigation }) => {
  const categoryId = navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(category => category.id === categoryId);
  return { headerTitle: selectedCategory.title };
};

export default CategoryMeals;
