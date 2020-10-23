import React from 'react';
import { Platform } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

import theme from '../../constants/Colors';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import Categories from '../screens/Categories.screen';
import CategoryMeals from '../screens/CategoryMeals.screen';
import MealDetail from '../screens/MealDetail.screen';
import Favorites from '../screens/Favorites.screen';
import FiltersScreen from '../screens/Filters.screen';

const navigatorDefaultConfig = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? theme.primary : '',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : theme.primary,
};

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: Categories,
    },
    CategoryMeals: {
      screen: CategoryMeals,
    },
    MealDetail: MealDetail,
  },
  { defaultNavigationOptions: navigatorDefaultConfig }
);

const FavoritesNavigator = createStackNavigator(
  {
    Favorites: Favorites,
    MealDetail: MealDetail,
  },
  { defaultNavigationOptions: navigatorDefaultConfig }
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: theme.primary,
    },
  },
  Favorites: {
    screen: FavoritesNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <MaterialIcons name='bookmark' size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: theme.secondary,
    },
  },
};

const FiltersNavigator = createStackNavigator({
  Filters: FiltersScreen,
});

FiltersScreen.navigationOptions = {
  headerTitle: 'Filter Meals',
};

const BottomNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: 'white',
        shifting: true,
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: theme.secondary,
        },
      });

const MainNavigator = createDrawerNavigator({
  MealsFavorites: BottomNavigator,
  Filters: FiltersNavigator,
});

export default createAppContainer(MainNavigator);
