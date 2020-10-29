import React, { useState, useEffect, useCallback } from 'react';
import { Platform, StyleSheet, Switch, Text, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch } from 'react-redux';

import CustomHeaderButton from '../components/HeaderButton';
import FilterOption from '../components/FilterOption';
import { setFilters } from '../redux/actions/meals.actions';

const FiltersScreen = ({ navigation }) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);

  const dispatch = useDispatch();

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
      lactoseFree: isLactoseFree,
    };
    dispatch(setFilters(appliedFilters));
    navigation.popToTop();
  }, [isGlutenFree, isVegetarian, isVegan, isLactoseFree, dispatch]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
    return () => {
      navigation;
    };
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.sectionTitle}>Available Filters / Restrictions</Text>
      <FilterOption label='Gluten-free' onChange={setIsGlutenFree} value={isGlutenFree} />
      <FilterOption label='Vegan' onChange={setIsVegan} value={isVegan} />
      <FilterOption label='Vegetarian' onChange={setIsVegetarian} value={isVegetarian} />
      <FilterOption label='Lactose Free' onChange={setIsLactoseFree} value={isLactoseFree} />
    </View>
  );
};

FiltersScreen.navigationOptions = ({ navigation }) => {
  const saveFilters = navigation.getParam('save');
  return {
    headerTitle: 'Filters',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title='Menu' iconName='menu' onPress={() => navigation.toggleDrawer()} />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title='Save'
          iconName='save'
          onPress={() => {
            navigation.navigate({ routeName: 'Categories' });
            return saveFilters();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 22,
    fontFamily: 'open-sans-bold',
    margin: 30,
  },
});

export default FiltersScreen;
