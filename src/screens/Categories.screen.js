import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

const Categories = ({ navigation }) => {
  const renderGridItem = itemData => (
    <TouchableOpacity
      style={styles.gridItem}
      onPress={() => {
        navigation.navigate({
          routeName: 'CategoryMeals',
          params: {
            categoryId: itemData.item.id,
          },
        });
      }}>
      <View>
        <Text>{itemData.item.title}</Text>
      </View>
    </TouchableOpacity>
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
