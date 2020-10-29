import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import MealItem from './MealItem';

const MealList = ({ data, navigation }) => {
  const renderMealItem = meal => (
    <MealItem
      itemData={meal}
      onSelect={() => {
        navigation.navigate({
          routeName: 'MealDetail',
          params: {
            mealId: meal.item.id,
            mealTitle: meal.item.title,
          },
        });
      }}
    />
  );

  return (
    <View style={styles.list}>
      <FlatList style={styles.mealItemList} data={data} renderItem={renderMealItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  mealItemList: {
    width: '100%',
  },
});

export default MealList;
