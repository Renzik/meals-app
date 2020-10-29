import React from 'react';
import { CATEGORIES } from '../data/dummy-data';
import MealItem from '../components/MealItem';
import MealList from '../components/MealList';
import { useSelector } from 'react-redux';

const CategoryMeals = ({ navigation }) => {
  const categoryId = navigation.getParam('categoryId');

  const availableMeals = useSelector(state => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(meals => meals.categoryIds.includes(categoryId));

  return <MealList navigation={navigation} data={displayedMeals} />;
};

CategoryMeals.navigationOptions = ({ navigation }) => {
  const categoryId = navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(category => category.id === categoryId);
  return { headerTitle: selectedCategory.title };
};

export default CategoryMeals;
