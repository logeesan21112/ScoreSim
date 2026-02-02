import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Config from '../common/config';

const CustomHeader = ({ title, children }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.screenTitle}>{title}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flex: 0,
    backgroundColor: Config.primaryColor,
    paddingVertical: 35,
    paddingHorizontal: 35,
    borderBottomWidth: 5,
    borderBottomColor: Config.accentColor,
    justifyContent: 'center',
  },
  screenTitle: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default CustomHeader;