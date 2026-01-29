// components/BottomBar.js
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import Config from '../common/config';

const BottomBar = ({ active, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.tab} onPress={() => onPress('Upcoming')}>
        <Icon name="home" size={24} color={active === 'Upcoming' ? Config.primaryColor : '#666'} />
        <Text style={{ color: active === 'Upcoming' ? Config.primaryColor : '#666' }}>Upcoming</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tab} onPress={() => onPress('MyBets')}>
        <Icon name="ticket" size={24} color={active === 'MyBets' ? Config.primaryColor : '#666'} />
        <Text style={{ color: active === 'MyBets' ? Config.primaryColor : '#666' }}>My Bets</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tab} onPress={() => onPress('Wallet')}>
        <Icon name="wallet" size={24} color={active === 'Wallet' ? Config.primaryColor : '#666'} />
        <Text style={{ color: active === 'Wallet' ? Config.primaryColor : '#666' }}>Wallet</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tab} onPress={() => onPress('Profile')}>
        <Icon name="dots-vertical" size={24} color={active === 'Profile' ? Config.primaryColor : '#666'} />
        <Text style={{ color: active === 'Profile' ? Config.primaryColor : '#666' }}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    borderTopWidth: 0.5,
    borderTopColor: '#ccc',
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tab: { justifyContent: 'center', alignItems: 'center' },
});

export default BottomBar;
