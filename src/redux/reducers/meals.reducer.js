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

    default:
      return state;
  }
};

export default mealsReducer;
