import React, { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  SectionList,
  Platform,
} from 'react-native';
import CustomHeaderButton from '../components/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { MEALS } from '../data/dummy-data';
import CustomText from '../components/CustomText';
import { ThemeColors } from 'react-navigation';

// to have: ingredients, steps it takes, Image, duration, affordability, complexity

const MealDetailScreen = ({ navigation }) => {
  const mealId = navigation.getParam('mealId');
  const { ingredients, steps, imageUrl, duration, affordability, complexity } = MEALS.find(
    meal => meal.id === mealId
  );
  console.log('ingredients', ingredients);
  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <View style={styles.imageContainer}>
        <Image style={styles.mealImage} source={{ uri: imageUrl }} />
      </View>
      <View style={styles.textContainer}>
        <CustomText>{duration}m</CustomText>
        <CustomText>{affordability.slice(0, 1).toUpperCase() + affordability.slice(1)}</CustomText>
        <CustomText>{complexity.slice(0, 1).toUpperCase() + complexity.slice(1)}</CustomText>
      </View>
      <View style={styles.ingredientsContainer}>
        <CustomText style={styles.sectionTitle}>Ingredients</CustomText>
        <View style={styles.ingredientsInnerContainer}>
          {ingredients.map((ingredient, id) => (
            // (<CustomText>{}</CustomText>),
            // separate the amount for each ingredient into two columns
            <CustomText style={id % 2 ? styles.ingredientsEven : styles.ingredientsOdd} key={id}>
              {ingredient}
            </CustomText>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = ({ navigation }) => {
  const mealId = navigation.getParam('mealId');
  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  // let favorite = false;

  return {
    headerTitle: selectedMeal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title='Favorite'
          iconName='bookmark-border'
          onPress={() => console.log('favorited')}
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
  imageContainer: {
    width: '99%',
    height: '30%',
    borderRadius: 10,
    borderWidth: 2,
    overflow: 'hidden',
    borderColor: 'rgba(0,0,0,0.5)',
    marginVertical: 10,
  },
  mealImage: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  ingredientsContainer: {
    width: '60%',
    marginVertical: 30,
  },
  ingredientsInnerContainer: {
    marginTop: 20,
  },
  ingredientsEven: {
    borderColor: 'transparent',
    borderWidth: 1,
    backgroundColor: Platform.OS === 'android' ? '#764bc0' : '#ffb16f',
  },
  ingredientsOdd: {
    borderColor: 'transparent',
    borderWidth: 1,
    backgroundColor: Platform.OS === 'android' ? '#896eb8' : '#ff9a45',
  },
  sectionTitle: {
    fontSize: 24,
    textAlign: 'center',
  },
});

export default MealDetailScreen;
