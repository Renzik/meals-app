import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import CategoryItem from '../components/CategoryItem';

const Categories = ({ navigation }) => {
  const renderGridItem = itemData => (
    <CategoryItem
      itemData={itemData.item}
      onSelect={() => {
        navigation.navigate({
          routeName: 'CategoryMeals',
          params: {
            categoryId: itemData.item.id,
          },
        });
      }}
      navigation={navigation}
    />
  );

  return <FlatList numColumns={2} data={CATEGORIES} renderItem={renderGridItem} />;
};

Categories.navigationOptions = { headerTitle: 'Meal Categories' };

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

export default Categories;
