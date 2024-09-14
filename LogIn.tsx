import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const LogIn = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Details</Text>
      <TextInput
        placeholder="Email address"
        mode="flat"
        style={styles.input}
        placeholderTextColor="#FFFFFF"
        underlineColor="transparent"
        theme={{ colors: { text: '#FFFFFF', placeholder: '#FFFFFF', background: '#33372C' } }} 
      />
      <TextInput
        placeholder="Password"
        mode="flat"
        secureTextEntry
        style={styles.input}
        placeholderTextColor="#FFFFFF"
        underlineColor="transparent"
        theme={{ colors: { text: '#FFFFFF', placeholder: '#FFFFFF', background: '#33372C' } }} 
      />

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      <Button mode="contained" style={styles.loginButton}>
        Login
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDE4D0',  
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4E4E4E',
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#33372C', 
    marginBottom: 20,
    borderRadius: 10,  
    paddingHorizontal: 10,
    height: 55,
    color: '#FFFFFF',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    color: '#4E4E4E',
    marginBottom: 30,
  },
  loginButton: {
    backgroundColor: '#7C1C39',  
    padding: 10,
    borderRadius: 10,
  },
});

export default LogIn;
