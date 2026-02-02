import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import Config from '../common/config';

const CustomTextInput = ({ error, placeholder, secureTextEntry, value, onChangeText, keyboardType }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#999"
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType || 'default'}
        style={[
          styles.input,
          {
            borderColor: error ? Config.errorColor : isFocused ? Config.primaryColor : '#ddd',
          },
        ]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  input: {
    height: 50,
    borderWidth: 1.5,
    borderRadius: 50,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    fontSize: 16,
    color: '#333',
    fontWeight: '400',
  },
  errorText: {
    color: Config.errorColor,
    fontSize: 12,
    marginTop: 5,
    marginLeft: 5,
  },
});