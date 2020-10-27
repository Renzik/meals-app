import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CustomText = ({ style, children }) => (
  <Text style={{ ...style, ...styles.text }}>{children}</Text>
);

const styles = StyleSheet.create({
  text: {
    fontFamily: 'open-sans',
  },
});

export default CustomText;
