import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from './App';

const TripDetails = ({ route }) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { tripId } = route.params;

  // Dummy data for demonstration purposes
  const trip = {
    driverName: 'Ruba Vignesh Balaji',
    rating: 4.69,
    startTime: '9:00 am',
    startLocation: 'VT NVC',
    endTime: '2:15 pm',
    dropLocation: 'Torgerson Hall',
    profileImage: 'https://via.placeholder.com/50', // Placeholder image URL
  };

  return (
    <ImageBackground
      source={require('./assets/bg.png')} // Replace with your image URL or local image
      style={styles.container}
    >
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backArrow}>←</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Trip Details</Text>

      <View style={styles.card}>
        <Image
          source={{ uri: trip.profileImage }}
          style={styles.profileImage}
        />
        <View style={styles.details}>
          <Text style={styles.detailText}>Name: {trip.driverName}</Text>
          <Text style={styles.detailText}>Rating: {trip.rating}</Text>
        </View>
      </View>

      <View style={styles.timeContainer}>
        <View style={styles.timeColumn}>
          <Text style={styles.timeText}>Start time: {trip.startTime}</Text>
          <Text style={styles.locationText}>Start Location: {trip.startLocation}</Text>
        </View>
        <View style={styles.timeColumn}>
          <Text style={styles.timeText}>End time: {trip.endTime}</Text>
          <Text style={styles.locationText}>Drop Location: {trip.dropLocation}</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          style={styles.startButton}
          onPress={() => navigation.navigate('StartTrip')}
        >
          Start Trip
        </Button>
        <Button
          mode="contained"
          style={styles.cancelButton}
          onPress={() => console.log('Cancel Trip')}
        >
          Cancel Trip
        </Button>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
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
  card: {
    flexDirection: 'row',
    backgroundColor: '#FDE4D0',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 20,
  },
  details: {
    flex: 1,
  },
  detailText: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 5,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  timeColumn: {
    flex: 1,
  },
  timeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4E4E4E',
    marginBottom: 10,
  },
  locationText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4E4E4E',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  startButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 20,
    flex: 1,
    marginRight: 10,
  },
  cancelButton: {
    backgroundColor: '#B45937',
    borderRadius: 20,
    flex: 1,
    marginLeft: 10,
  },
});

export default TripDetails;