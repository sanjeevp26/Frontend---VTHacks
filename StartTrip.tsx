import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from './App'; 

const StartTrip = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Start Location : VT NVC</Text>
      <Text style={styles.title}>Drop Location : Torgerson Hall</Text>
      <Text style={styles.title}>Date : 15th Sept 2024</Text>
      
      <Image
        source={{ uri: 'https://via.placeholder.com/300' }} // Placeholder image URL
        style={styles.mapImage}
      />

      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          style={styles.checkInButton}
          onPress={() => navigation.navigate('TripCheck')}
        >
          Passenger Check-In
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDE4D0',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4E4E4E',
    marginBottom: 10,
  },
  mapImage: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  checkInButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default StartTrip;