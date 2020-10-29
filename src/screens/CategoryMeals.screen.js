import React from 'react';
import { CATEGORIES } from '../data/dummy-data';
import MealItem from '../components/MealItem';
import MealList from '../components/MealList';
import { useSelector } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import CustomText from '../components/CustomText';

const CategoryMeals = ({ navigation }) => {
  const categoryId = navigation.getParam('categoryId');

  const availableMeals = useSelector(state => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(meals => meals.categoryIds.includes(categoryId));

  if (displayedMeals.length === 0 || !displayedMeals)
    return (
      <View style={styles.noMealsContainer}>
        <CustomText style={styles.noMealsText}>
          No meals were found, manage your filter settings
        </CustomText>
      </View>
    );

  return <MealList navigation={navigation} data={displayedMeals} />;
};

CategoryMeals.navigationOptions = ({ navigation }) => {
  const categoryId = navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(category => category.id === categoryId);
  return { headerTitle: selectedCategory.title };
};

const styles = StyleSheet.create({
  noMealsContainer: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noMealsText: {
    fontSize: 16,
    color: 'rgba(0,0,0,0.5)',
  },
});

export default CategoryMeals;
