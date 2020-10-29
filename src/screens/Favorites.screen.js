import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import MealList from '../components/MealList';
import MealItem from '../components/MealItem';
import CustomHeaderButton from '../components/HeaderButton';

const Favorites = ({ navigation }) => {
  const favMeals = useSelector(state => state.meals.favoriteMeals);
  // console.log(favMeals, 'FAV MEALSSSS');
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

  return <MealList navigation={navigation} data={favMeals} renderItem={renderFavoriteMeals} />;
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
