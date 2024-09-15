import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Button } from 'react-native-paper';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './App';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('./assets/Home_bg.png')} // Ensure this path matches your image location
      style={styles.background}
    >
      <View style={styles.overlay}>
        {/* Adding two buttons aligned horizontally */}
        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            contentStyle={{ backgroundColor: '#B45937' }} // Explicitly set background color here
            style={styles.button}
            labelStyle={styles.buttonLabel}
            onPress={() => navigation.navigate('SignUp')}
          >
            Sign Up
          </Button>

          <Button
            mode="contained"
            contentStyle={{ backgroundColor: '#B45937' }} // Explicitly set background color here
            style={styles.button}
            labelStyle={styles.buttonLabel}
            onPress={() => navigation.navigate('LogIn')}
          >
            Log In
          </Button>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 50, // To keep the buttons above the bottom edge
  },
  buttonContainer: {
    flexDirection: 'row', // Align buttons horizontally
    justifyContent: 'space-between',
    width: '80%',
  },
  button: {
    borderRadius: 10,
    width: '45%', // Make sure both buttons take equal width
  },
  buttonLabel: {
    color: '#FFFFFF', // White text for contrast
    fontSize: 18,
  },
});

export default HomeScreen;