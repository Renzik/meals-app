import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';

const CategoryItem = ({ itemData, onSelect }) => {
  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21)
    TouchableComponent = TouchableNativeFeedback;

  return (
    <View style={styles.gridContainer}>
      <TouchableComponent style={styles.touchableContainer} onPress={() => onSelect()}>
        <View style={{ ...styles.container, ...{ backgroundColor: itemData.color } }}>
          <Text numberOfLines={2} style={styles.title}>
            {itemData.title}
          </Text>
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    elevation: 5,
    overflow: Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden' : 'visible',
  },
  touchableContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'right',
  },
});

export default CategoryItem;
