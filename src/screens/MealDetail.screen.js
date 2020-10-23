import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const MealDetailScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>MealDetailScreen</Text>
      <Button
        title='all the way back'
        onPress={() => {
          props.navigation.replace('Categories');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MealDetailScreen;
