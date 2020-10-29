import { MEALS } from '../../data/dummy-data';
import { actions } from '../actions/meals.actions';

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.TOGGLE_FAVORITE:
      const mealInQuestion = state.favoriteMeals.findIndex(meal => meal.id === action.payload);
      const theMeal = state.meals.find(meal => meal.id === action.payload);

      const updatedFavMeals = [...state.favoriteMeals];
      updatedFavMeals.splice(mealInQuestion, 1);

      return mealInQuestion < 0
        ? { ...state, favoriteMeals: [...state.favoriteMeals, theMeal] }
        : { ...state, favoriteMeals: updatedFavMeals };

    case actions.SET_FILTERS:
      // {
      // isLactoseFree: true
      // isVegan: false
      // isVegetarian: false
      // isGlutenFree: false
      // }

      const appliedFilters = action.payload;
      const filteredMeals = state.meals.filter(meal => {
        if (appliedFilters.glutenFree && !meal.isGlutenFree) return false;
        if (appliedFilters.vegan && !meal.isVegan) return false;
        if (appliedFilters.lactoseFree && !meal.isLactoseFree) return false;
        if (appliedFilters.vegetarian && !meal.isVegetarian) return false;

        return true;
      });
      return { ...state, filteredMeals: filteredMeals };

    default:
      return state;
  }
};

export default mealsReducer;
