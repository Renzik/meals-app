export const actions = {
  TOGGLE_FAVORITE: 'TOGGLE_FAVORITE',
  SET_FILTERS: 'SET_FILTERS',
};

export const toggleFavorite = meal => ({
  type: actions.TOGGLE_FAVORITE,
  payload: meal,
});

export const setFilters = filterSettings => ({
  type: actions.SET_FILTERS,
  payload: filterSettings,
});
