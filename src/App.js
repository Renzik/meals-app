import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { enableScreens } from 'react-native-screens';

import MealsNavigator from './navigation/MealsNavigation';

enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('../assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('../assets/fonts/OpenSans-Bold.ttf'),
  });
};

const App = () => {
  const [fontsLoading, setFontsLoading] = useState(false);

  if (!fontsLoading)
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontsLoading(true)}
        onError={err => console.log('ERROR: ', err)}
      />
    );

  return <MealsNavigator />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
