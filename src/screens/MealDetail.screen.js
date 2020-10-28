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
  Dimensions,
} from 'react-native';
import CustomHeaderButton from '../components/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { MEALS } from '../data/dummy-data';
import CustomText from '../components/CustomText';
import theme from '../../constants/Colors';

// to have: ingredients, steps it takes, Image, duration, affordability, complexity

const MealDetailScreen = ({ navigation }) => {
  const mealId = navigation.getParam('mealId');
  const { ingredients, steps, imageUrl, duration, affordability, complexity } = MEALS.find(
    meal => meal.id === mealId
  );

  // duration: 10m | 15m | 20m | 45m | 60m | 240m
  // affordability: affordable | pricey | luxurious
  // complexity: simple | challenging | hard

  let mealRating = () => {
    let durationRate =
      duration <= 20
        ? theme.duration.short
        : duration > 20 && duration <= 60
        ? theme.duration.medium
        : theme.duration.long;

    let affordabilityRate =
      affordability === 'affordable'
        ? theme.affordability.affordable
        : affordability === 'pricey'
        ? theme.affordability.pricey
        : theme.affordability.luxurious;

    let complexityRate =
      complexity === 'simple'
        ? theme.complexity.simple
        : complexity === 'challenging'
        ? theme.complexity.challenging
        : theme.complexity.hard;

    return (
      <View style={styles.mealDetails}>
        <View style={{ backgroundColor: durationRate, ...styles.mealRatingContainer }}>
          <Text style={styles.mealRatingText}>{duration}m</Text>
        </View>
        <View
          style={{
            backgroundColor: affordabilityRate,
            borderRightWidth: 0.5,
            borderLeftWidth: 0.5,
            ...styles.mealRatingContainer,
          }}>
          <Text style={styles.mealRatingText}>
            {affordability.slice(0, 1).toUpperCase() + affordability.slice(1)}
          </Text>
        </View>
        <View style={{ backgroundColor: complexityRate, ...styles.mealRatingContainer }}>
          <Text style={styles.mealRatingText}>
            {complexity.slice(0, 1).toUpperCase() + complexity.slice(1)}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <View style={styles.imageContainer}>
        <Image style={styles.mealImage} source={{ uri: imageUrl }} />
      </View>
      {mealRating()}
      <View style={styles.itemContainer}>
        <Text style={styles.sectionTitle}>Ingredients</Text>
        <View style={styles.ingredientsInnerContainer}>
          <CustomText style={styles.sectionSubtitle}>List of ingredients</CustomText>
          {ingredients.map((ingredient, id) => (
            <CustomText
              style={id % 2 ? styles.ingredientsEven : styles.ingredientsOdd}
              key={ingredient}>
              {ingredient}
            </CustomText>
          ))}
        </View>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.sectionTitle}>Steps</Text>
        <View style={styles.ingredientsInnerContainer}>
          <CustomText style={styles.sectionSubtitle}>List of steps</CustomText>
          {steps.map((step, id) => (
            <CustomText style={id % 2 ? styles.ingredientsEven : styles.ingredientsOdd} key={id}>
              {step}
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
    alignItems: 'center',
  },
  imageContainer: {
    width: '95%',
    height: Dimensions.get('screen').height * 0.25,
    borderRadius: 15,
    borderWidth: 1,
    overflow: 'hidden',
    borderColor: 'rgba(0,0,0,0.4)',
    marginTop: 10,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  mealImage: {
    width: '100%',
    height: '100%',
  },
  mealDetails: {
    width: '95%',
    height: Dimensions.get('screen').height * 0.05,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 25,
    alignItems: 'center',
  },
  mealRatingText: {
    fontSize: 16,
    fontFamily: 'open-sans-bold',
  },
  mealRatingContainer: {
    flex: 3,
    height: '100%',
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: 'rgba(0,0,0,0.4)',
    borderTopColor: 'transparent',
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    width: '80%',
    marginVertical: 20,
    borderColor: Platform.OS === 'android' ? '#764bc0ad' : '#ffb16fad',
    borderWidth: 1.5,
    padding: 35,
  },
  ingredientsInnerContainer: {
    // marginVertical: 10,
    width: '100%',
  },
  ingredientsEven: {
    borderColor: 'transparent',
    borderWidth: 1,
    backgroundColor: Platform.OS === 'android' ? '#764bc0ad' : '#ffb16fad',
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  ingredientsOdd: {
    borderColor: 'transparent',
    borderWidth: 1,
    backgroundColor: Platform.OS === 'android' ? '#896eb8ad' : '#ff9a45ad',
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 24,
    textAlign: 'center',
    height: 50,
    fontFamily: 'open-sans-bold',
  },
  sectionSubtitle: {
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default MealDetailScreen;
