import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';
import MealItem from '../components/MealItem';
import CustomHeaderButton from '../components/HeaderButton';

const Favorites = ({ navigation }) => {
  const dummyMeals = MEALS.filter((meal, id) => id < 2);

  const renderFavoriteMeals = meal => (
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

  return <MealList navigation={navigation} data={dummyMeals} renderItem={renderFavoriteMeals} />;
};

Favorites.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: 'Your Favorites',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title='Menu' iconName='menu' onPress={() => navigation.toggleDrawer()} />
      </HeaderButtons>
    ),
  };
};

export default Favorites;
