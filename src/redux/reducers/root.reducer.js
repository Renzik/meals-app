import { combineReducers } from 'redux';
import mealsReducer from './meals.reducer';

const rootReducer = combineReducers({
  meals: mealsReducer,
});

export default rootReducer;
