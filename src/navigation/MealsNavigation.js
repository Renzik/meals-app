import { Platform } from 'react-native';

import theme from '../../constants/Colors';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// // import { createBottomTabNavigator } from 'react-navigation-tabs';
// // import { createDrawerNavigator } from 'react-navigation-drawer';

import Categories from '../screens/Categories.screen';
import CategoryMeals from '../screens/CategoryMeals.screen';
import MealDetail from '../screens/MealDetail.screen';
// // import FavoritesScreen from '../screens/FavoritesScreen';
// // import FiltersScreen from '../screens/FiltersScreen';

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

export default createAppContainer(MealsNavigator);
