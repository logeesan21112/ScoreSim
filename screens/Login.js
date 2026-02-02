import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Config from '../common/config';
import CustomTextInput from '../components/CustomTextInput';
import Button from '../components/Button';

const { width, height } = Dimensions.get('window');

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const storedUser = await AsyncStorage.getItem('user');

      if (!storedUser) {
        alert('No user found. Please register first.');
        return;
      }

      const user = JSON.parse(storedUser);

      if (username === user.username && password === user.password) {
        navigation.replace('Main');
      } else {
        alert('Invalid username or password');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.loginContainer}>
      <ScrollView>
        <View style={styles.headerTitleBG}>
          <Image
            style={styles.logo}
            source={require('../assets/logo.png')}
          />
        </View>

        <View style={styles.loginForm}>
          <CustomTextInput
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />

          <CustomTextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.forgotPassword}>
              Don't have an account? Register!
            </Text>
          </TouchableOpacity>

          <Button title="Login" onPress={handleLogin} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: Config.backgroundColor,
  },
  headerTitleBG: {
    backgroundColor: Config.primaryColor,
    height: height / 2.5,
    paddingVertical: 20,
    paddingHorizontal: 30,
    flex: 1,
    alignItems: 'center',
  },
  loginForm: {
    backgroundColor: '#ffffff',
    marginTop: -50,
    borderRadius: 20,
    marginVertical: 10,
    marginHorizontal: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingBottom: 30,
    elevation: 5,
  },
  forgotPassword: {
    textAlign: 'center',
    color: Config.primaryColor,
    fontSize: 18,
    marginVertical: 20,
    fontWeight: '400',
  },
  logo: {
    width: width / 2,
    height: width / 2,
    resizeMode: 'contain',
  },
});
