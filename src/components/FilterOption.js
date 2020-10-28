import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';

import theme from '../../constants/Colors';

const FilterOption = ({ label, onChange, value }) => {
  return (
    <View style={styles.filtersContainer}>
      <Text style={styles.filterTitle}>{label}</Text>
      <Switch
        trackColor={{
          true: Platform.OS === 'android' ? theme.primary : theme.secondary,
        }}
        thumbColor={Platform.OS === 'android' ? theme.primary : ''}
        value={value}
        onValueChange={newValue => onChange(newValue)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  filterTitle: {
    fontSize: 16,
    fontFamily: 'open-sans',
  },
  filtersContainer: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
});

export default FilterOption;
