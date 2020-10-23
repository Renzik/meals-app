import React from 'react';
import { Platform } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

import theme from '../../constants/Colors';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// // import { createDrawerNavigator } from 'react-navigation-drawer';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import Categories from '../screens/Categories.screen';
import CategoryMeals from '../screens/CategoryMeals.screen';
import MealDetail from '../screens/MealDetail.screen';
import Favorites from '../screens/Favorites.screen';
import FiltersScreen from '../screens/Filters.screen';

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
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? theme.primary : '',
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : theme.primary,
    },
  }
);

const tabScreenConfig =  {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />;
      },
    },
  },
  Favorites: {
    screen: Favorites,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <MaterialIcons name='bookmark' size={25} color={tabInfo.tintColor} />;
      },
    },
  },
},



const BottomNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
      activeColor: theme.secondary,
      shifting: true
    })
    : createBottomTabNavigator(tabScreenConfig,
        {
          tabBarOptions: {
            activeTintColor: theme.secondary,
          },
        }
      );

export default createAppContainer(BottomNavigator);
