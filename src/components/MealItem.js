import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  ImageBackground,
} from 'react-native';

import CustomText from './CustomText';

const MealItem = ({ itemData, onSelect }) => {
  const {
    affordability,
    complexity,
    duration,
    imageUrl,
    ingredients,
    isGlutenFree,
    isLactoseFree,
    isVegan,
    isVegetarian,
    steps,
    title,
  } = itemData.item;

  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21)
    TouchableComponent = TouchableNativeFeedback;

  return (
    <View style={styles.mealItem}>
      <TouchableComponent onPress={() => onSelect()}>
        {/* <View> */}
        <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
          <ImageBackground source={{ uri: imageUrl }} style={styles.bgImage}>
            <View style={styles.titleContainer}>
              <Text numberOfLines={1} style={styles.title}>
                {title}
              </Text>
            </View>
          </ImageBackground>
          {/* </View> */}
          {/* <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            <CustomText>{duration}m</CustomText>
            <CustomText>{complexity.toUpperCase()}</CustomText>
            <CustomText>{affordability.toUpperCase()}</CustomText>
          </View> */}
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#d2d4d5',
    overflow: 'hidden',
    marginVertical: 10,
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  mealHeader: {
    // height: '85%',
  },
  // mealDetail: {
  //   paddingHorizontal: 10,
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  //   height: '15%',
  // },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  // mealRow: {
  //   flexDirection: 'row',
  // },
});

export default MealItem;
