import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const passengers = [
  {
    id: '1',
    name: 'Ruba Vignesh Balaji',
    rating: '4.69',
    gtMeter: '98%',
    startTime: '09:00',
    endTime: '14:15',
    startLocation: 'DC',
    endLocation: 'Blacksburg, VA',
    image: 'path_to_image_1'
  },
  {
    id: '2',
    name: 'Ram Prashant',
    rating: '4.88',
    gtMeter: '94%',
    startTime: '14:00',
    endTime: '18:45',
    startLocation: 'DC',
    endLocation: 'Blacksburg, VA',
    image: 'path_to_image_2'
  }
];

const PassengerList = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Passenger List</Text>
      <FlatList
        data={passengers}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <View style={styles.header}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <View style={styles.headerText}>
                <Text style={styles.name}>Name: {item.name}</Text>
                <Text style={styles.details}>Rating: {item.rating}</Text>
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
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('UserSelectionDetails', { passengerId: item.id })}>
                <Text style={styles.buttonText}>Passenger Details</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Chat', { passengerId: item.id })}>
                <Text style={styles.buttonText}>Chat Now</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.actionButtons}>
              <TouchableOpacity style={styles.rejectButton} onPress={() => {/* Handle reject action */}}>
                <Text style={styles.actionButtonText}>✗</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.acceptButton} onPress={() => {/* Handle accept action */}}>
                <Text style={styles.actionButtonText}>✓</Text>
              </TouchableOpacity>
            </View>
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
    alignItems: 'center',
  },
  column: {
    flexDirection: 'column',
    flex: 1,
  },
  columnHeader: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4E4E4E',
    marginBottom: 5,
  },
  time: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  location: {
    fontSize: 14,
    color: '#666',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10, // Adjusted padding
    paddingBottom: 5, // Reduced padding bottom
  },
  button: {
    backgroundColor: '#7C1C39',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    margin: 5,
    flex: 1,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10, // Adjusted padding
    paddingTop: 5, // Reduced padding top
  },
  rejectButton: {
    backgroundColor: '#FF7F7F', // Mellow red color
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    margin: 5,
    flex: 1,
  },
  acceptButton: {
    backgroundColor: '#90EE90', // Mellow green color
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    margin: 5,
    flex: 1,
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default PassengerList;