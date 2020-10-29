import React from 'react';
import { StyleSheet, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import CustomText from '../components/CustomText';
import MealList from '../components/MealList';
import MealItem from '../components/MealItem';
import CustomHeaderButton from '../components/HeaderButton';

const Favorites = ({ navigation }) => {
  const favMeals = useSelector(state => state.meals.favoriteMeals);

  if (favMeals.length === 0 || !favMeals)
    return (
      <View style={styles.noFavoritesContainer}>
        <CustomText style={styles.noFavoritesText}>
          No favorite meals found. Start adding some!
        </CustomText>
      </View>
    );

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

const styles = StyleSheet.create({
  noFavoritesContainer: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noFavoritesText: {
    fontSize: 16,
    color: 'rgba(0,0,0,0.5)',
  },
});

export default Favorites;
