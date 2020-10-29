export const actions = {
  TOGGLE_FAVORITE: 'TOGGLE_FAVORITE',
};

export const toggleFavorite = id => ({
  type: actions.TOGGLE_FAVORITE,
  payload: id,
});
