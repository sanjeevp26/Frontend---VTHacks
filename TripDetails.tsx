import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from './App'; 

const TripDetails = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trip Details</Text>
      
      <View style={styles.card}>
        <Image
          source={{ uri: 'https://via.placeholder.com/50' }} // Placeholder image URL
          style={styles.profileImage}
        />
        <View style={styles.details}>
          <Text style={styles.detailText}>Name: Ruba Vignesh Balaji</Text>
          <Text style={styles.detailText}>Rating: 4.69</Text>
          <Text style={styles.detailText}>Car: Toyota Camry</Text>
          <Text style={styles.detailText}>Lic. Plate: ABC12</Text>
        </View>
      </View>

      <View style={styles.timeContainer}>
        <View style={styles.timeColumn}>
          <Text style={styles.timeText}>Start time: 9:00 am</Text>
          <Text style={styles.locationText}>Start Location: VT NVC</Text>
        </View>
        <View style={styles.timeColumn}>
          <Text style={styles.timeText}>End time: 2:15 pm</Text>
          <Text style={styles.locationText}>Drop Location: Torgerson Hall</Text>
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
    marginBottom: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#7C1C39',
    borderRadius: 10,
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
    color: '#FFFFFF',
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
    backgroundColor: '#7C1C39',
    borderRadius: 20,
    flex: 1,
    marginLeft: 10,
  },
});

export default TripDetails;