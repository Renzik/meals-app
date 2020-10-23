import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { MaterialIcons } from '@expo/vector-icons';

import theme from '../../constants/Colors';

const CustomHeaderButton = props => {
  return (
    <HeaderButton
      {...props}
      IconComponent={MaterialIcons}
      iconSize={25}
      color={Platform.OS === 'android' ? 'white' : theme.primary}
    />
  );
};

const styles = StyleSheet.create({});

export default CustomHeaderButton;
