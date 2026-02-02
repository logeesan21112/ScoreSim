import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Config from '../common/config';
import CustomHeader from '../components/CustomHeader';

const { width, height } = Dimensions.get('window');

const Profile = () => {
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
  });

  useEffect(() => {
    const loadUser = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.log(error);
      }
    };

    loadUser();
  }, []);

  return (
    <View style={styles.container}>
      <CustomHeader title="Profile" />

      <View style={styles.contentContainer}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.avatar}
        />

        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.username}>@{user.username}</Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Config.backgroundColor,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 60,
  },
  avatar: {
    width: width / 3,
    height: width / 3,
    borderRadius: (width / 3) / 2,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Config.primaryColor,
  },
  username: {
    fontSize: 18,
    color: '#555',
    marginVertical: 5,
  },
  email: {
    fontSize: 16,
    color: '#777',
  },
});