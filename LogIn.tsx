import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Alert, ScrollView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { storeData } from './utils/asyncStorage'; // Import the utility

const LogIn = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const postData = JSON.stringify({
      email_id: email,
      password: password
    });

    try {
      const response = await fetch('http://172.29.91.19:3000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: postData,
        redirect: 'follow'
      });

      const responseData = await response.json();
      console.log(responseData);

      if (responseData.msg == "Login successful") {
        // Store user data
        console.log(responseData.user);
        await storeData('userData', responseData.user);

        // Navigate to the next screen, e.g., Home
        Alert.alert('Login success', `Welcome, ${responseData.user.name}!`);
        navigation.navigate('Dashboard');
      } else {
        Alert.alert('Login failed', 'Invalid email or password');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Login failed', 'An error occurred. Please try again.');
    }
  };

  return (
    <ImageBackground
      source={require('./assets/bg.png')} // Replace with your image URL or local image
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Login Details</Text>

        <TextInput
          placeholder="Email address"
          mode="flat"
          style={styles.input}
          placeholderTextColor="#000000"
          underlineColor="transparent"
          theme={{ colors: { text: '#000000', placeholder: '#000000', background: '#FDE4D0' } }}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Password"
          mode="flat"
          secureTextEntry
          style={styles.input}
          placeholderTextColor="#000000"
          underlineColor="transparent"
          theme={{ colors: { text: '#000000', placeholder: '#000000', background: '#FDE4D0' } }}
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>

        <Button mode="contained" style={styles.loginButton} onPress={handleLogin}>
          Login
        </Button>

        <Text style={styles.footerText}>
          Don't have an account?{' '}
          <Text style={styles.signUpLink} onPress={() => navigation.navigate('SignUp')}>
            Sign Up
          </Text>
        </Text>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  backButton: {
    alignSelf: 'flex-start',
  },
  backArrow: {
    fontSize: 40,
    color: '#B45937',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#B45937',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#FDE4D0',
    marginBottom: 20,
    borderRadius: 20,
    paddingHorizontal: 10,
    color: '#000000',
    height: 55,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    color: '#4E4E4E',
    marginBottom: 30,
  },
  loginButton: {
    backgroundColor: '#B45937',
    padding: 10,
    borderRadius: 10,
  },
  footerText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#4E4E4E',
  },
  signUpLink: {
    color: '#B45937',
    fontWeight: 'bold',
  },
});

export default LogIn;