import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './App';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageRow}>
        <Image 
          source={require('./assets/car.png')} 
          style={styles.carImage}
        />
      </View>
      <Text style={styles.title}>Carpool and chill</Text>
      
      <Button
        mode="contained"
        style={styles.button}
        onPress={() => navigation.navigate('SignUp')}
      >
        Sign Up
      </Button>

      <Button
        mode="contained"
        style={styles.button}
        onPress={() => navigation.navigate('LogIn')}
      >
        Log in
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDE4D0',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  carImage: {
    width: 600,
    height: 360,
    resizeMode: 'contain',
    marginLeft: 200,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#4E4E4E',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#7C1C39',
    marginBottom: 15,
    width: 200,
  },
});

export default HomeScreen;
