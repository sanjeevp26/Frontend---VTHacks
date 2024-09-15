import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from './App';  // Adjust this path as needed

const SignUp = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backArrow}>←</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Welcome Onboard!</Text>

      <TextInput
        placeholder="Enter your full name"
        mode="flat"
        style={[styles.input, { borderTopLeftRadius: 20, borderTopRightRadius: 20, borderWidth: 0 }]} 
        placeholderTextColor="#FFFFFF"
        underlineColor="transparent" 
        theme={{ colors: { text: '#FFFFFF', placeholder: '#FFFFFF', background: '#7C1C39' } }} 
      />
      <TextInput
        placeholder="College Name"
        mode="flat"
        style={[styles.input, { borderTopLeftRadius: 20, borderTopRightRadius: 20, borderWidth: 0 }]}
        placeholderTextColor="#FFFFFF"
        underlineColor="transparent" 
        theme={{ colors: { text: '#FFFFFF', placeholder: '#FFFFFF', background: '#7C1C39' } }} 
      />
      <TextInput
        placeholder="Enter your work email"
        mode="flat"
        style={[styles.input, { borderTopLeftRadius: 20, borderTopRightRadius: 20, borderWidth: 0 }]}
        placeholderTextColor="#FFFFFF"
        underlineColor="transparent" 
        theme={{ colors: { text: '#FFFFFF', placeholder: '#FFFFFF', background: '#7C1C39' } }} 
      />
      <TextInput
        placeholder="Enter Password"
        secureTextEntry
        mode="flat"
        style={[styles.input, { borderTopLeftRadius: 20, borderTopRightRadius: 20, borderWidth: 0 }]}
        placeholderTextColor="#FFFFFF"
        underlineColor="transparent" 
        theme={{ colors: { text: '#FFFFFF', placeholder: '#FFFFFF', background: '#7C1C39' } }} 
      />
      <TextInput
        placeholder="Confirm Password"
        secureTextEntry
        mode="flat"
        style={[styles.input, { borderTopLeftRadius: 20, borderTopRightRadius: 20, borderWidth: 0 }]}
        placeholderTextColor="#FFFFFF"
        underlineColor="transparent"
        theme={{ colors: { text: '#FFFFFF', placeholder: '#FFFFFF', background: '#7C1C39' } }} 
      />
      <TextInput
        placeholder="Phone number"
        mode="flat"
        style={[styles.input, { borderTopLeftRadius: 20, borderTopRightRadius: 20, borderWidth: 0 }]}
        placeholderTextColor="#FFFFFF"
        underlineColor="transparent" 
        theme={{ colors: { text: '#FFFFFF', placeholder: '#FFFFFF', background: '#7C1C39' } }} 
      />

      {/* Two Extra Buttons: Passenger and Drive & Pass */}
      <View style={styles.buttonContainer}>
        <Button mode="contained" style={styles.extraButton}>
          Passenger
        </Button>
        <Button mode="contained" style={styles.extraButton}>
          Drive & Pass
        </Button>
      </View>

      {/* Navigate to IDVerify when Verify is pressed */}
      <Button mode="contained" style={styles.verifyButton} onPress={() => navigation.navigate('IDVerify')}>
        Verify
      </Button>

      <Text style={styles.footerText}>
        Already have an account?{' '}
        <Text style={styles.signInLink} onPress={() => navigation.navigate('LogIn')}>
          Sign In
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDE4D0',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  backButton: {
    alignSelf: 'flex-start',
  },
  backArrow: {
    fontSize: 40,  
    color: '#4E4E4E',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4E4E4E',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#7C1C39', 
    marginBottom: 20,
    borderRadius: 20,  
    paddingHorizontal: 10,  
    color: '#FFFFFF', 
    height: 55, 
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  extraButton: {
    backgroundColor: '#7C1C39',
    width: '45%',
    borderRadius: 20,
  },
  verifyButton: {
    backgroundColor: '#33372C', 
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  footerText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#4E4E4E',
  },
  signInLink: {
    color: '#7C1C39',
    fontWeight: 'bold',
  },
});

export default SignUp;
