import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Config from '../common/config';
import CustomTextInput from '../components/CustomTextInput';
import Button from '../components/Button';

const { height } = Dimensions.get('window');

const Register = ({ navigation }) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    console.log('Register pressed (UI only)');
  };

  return (
    <View style={styles.registerContainer}>
      <ScrollView>
        <View style={styles.headerTitleBG}>
          <Text style={styles.headerTitle}>Register New Account.</Text>
        </View>

        <View style={styles.registerForm}>
          <CustomTextInput
            placeholder="Full Name"
            value={name}
            onChangeText={setName}
          />

          <CustomTextInput
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />

          <CustomTextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />

          <CustomTextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.forgotPassword}>
              Already have an account? Login!
            </Text>
          </TouchableOpacity>

          <Button title="Register" onPress={handleRegister} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  registerContainer: {
    flex: 1,
    backgroundColor: Config.backgroundColor,
  },
  headerTitleBG: {
    backgroundColor: Config.primaryColor,
    height: height / 3,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: '30%',
  },
  registerForm: {
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
  },
});
