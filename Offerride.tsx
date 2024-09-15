import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';

const drives = [
  {
    id: '1',
    name: 'Ruba Vignesh Balaji',
    rating: '4.69',
    car: 'Toyota Camry',
    licensePlate: 'ABC12',
    gtMeter: '98%',
    startTime: '09:00',
    endTime: '14:15',
    startLocation: 'DC',
    endLocation: 'Blacksburg, VA',
    address: 'VT NVC, 7054 Haycock Rd, Falls Church, VA 22043'
  },
  {
    id: '2',
    name: 'Ram Prashant',
    rating: '4.88',
    car: 'Chrysler Pacifica',
    licensePlate: 'J04ME',
    gtMeter: '94%',
    startTime: '14:00',
    endTime: '18:45',
    startLocation: 'DC',
    endLocation: 'Blacksburg, VA',
    address: 'VT NVC, 7054 Haycock Rd, Falls Church, VA 22043'
  }
];

const AvailableDrive = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>List of Drives</Text>
      <FlatList
        data={drives}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <View style={styles.header}>
              <Image source={{ uri: 'path_to_image' }} style={styles.image} />
              <View style={styles.headerText}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.details}>Rating: {item.rating}</Text>
                <Text style={styles.details}>Car: {item.car}</Text>
                <Text style={styles.details}>Lic. Plate: {item.licensePlate}</Text>
                <Text style={styles.details}>GT Meter: {item.gtMeter}</Text>
              </View>
            </View>
            <View style={styles.tripDetails}>
              <View style={styles.column}>
              <Text style={styles.columnHeader}>Start Point</Text>
                <Text style={styles.time}>{item.startTime}</Text>
                <Text style={styles.location}>{item.startLocation}</Text>
              </View>
              <View style={styles.column}>
              <Text style={styles.columnHeader}>End Point</Text>
                <Text style={styles.time}>{item.endTime}</Text>
                <Text style={styles.location}>{item.endLocation}</Text>
              </View>
              {/* <Text style={styles.address}>{item.address}</Text> */}
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Details</Text>
            </TouchableOpacity>
          </Card>
        )}
      />
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
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
    borderRadius: 10,
  },
  header: {
    flexDirection: 'row',
    padding: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  headerText: {
    marginLeft: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  details: {
    fontSize: 14,
  },
  tripDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center', // Ensure vertical alignment is centered
  },
  column: {
    flexDirection: 'column',
    flex: 1, // Each column takes equal width
  },
  columnHeader: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4E4E4E', // Darker color for emphasis
    marginBottom: 5, // Space between header and time/location
  },
  time: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333', // Example color
  },
  location: {
    fontSize: 14,
    color: '#666', // Example color
  },
  address: {
    fontSize: 12,
    marginTop: 10,
    flex: 1, // Give the address full width to ensure it is on its own line below the columns
    textAlign: 'center', // Center-align the address if it's on its own line
  },
  button: {
    backgroundColor: '#7C1C39',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    margin: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default AvailableDrive;