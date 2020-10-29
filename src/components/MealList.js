import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import CustomText from './CustomText';
import MealItem from './MealItem';

const MealList = ({ data, navigation }) => {
  const favMeals = useSelector(state => state.meals.favoriteMeals);

  const renderMealItem = mealData => {
    const isFav = favMeals.some(meal => meal.id === mealData.id);

    return (
      <MealItem
        itemData={mealData}
        onSelect={() => {
          navigation.navigate({
            routeName: 'MealDetail',
            params: {
              mealId: mealData.item.id,
              mealTitle: mealData.item.title,
              isFav: isFav,
            },
          });
        }}
      />
    );
  };

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
