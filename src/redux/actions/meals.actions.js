export const actions = {
  TOGGLE_FAVORITE: 'TOGGLE_FAVORITE',
};

export const toggleFavorite = meal => ({
  type: actions.TOGGLE_FAVORITE,
  payload: meal,
});
