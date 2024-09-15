import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';

const passengers = [
  { id: '1', name: 'Ananya P' },
  { id: '2', name: 'Sanjeev P' },
  { id: '3', name: 'Ram P' },
  { id: '4', name: 'Jo Jo' },
];

const TripCheck = () => {
  const [checkedIn, setCheckedIn] = useState({});

  const toggleCheckIn = (id) => {
    setCheckedIn((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Car Pool Check In</Text>
      <FlatList
        data={passengers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <View style={styles.passengerRow}>
              <Text style={styles.passengerName}>P{item.id} : {item.name}</Text>
              <View style={styles.checkButtons}>
                <TouchableOpacity
                  style={[styles.checkButton, styles.rejectButton]}
                  onPress={() => toggleCheckIn(item.id)}
                >
                  <Text style={styles.checkButtonText}>✗</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.checkButton, styles.acceptButton, checkedIn[item.id] && styles.checkedIn]}
                  onPress={() => toggleCheckIn(item.id)}
                >
                  <Text style={styles.checkButtonText}>✓</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Card>
        )}
      />
      <TouchableOpacity style={styles.beginRideButton}>
        <Text style={styles.beginRideButtonText}>Begin Ride</Text>
      </TouchableOpacity>
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
    padding: 10,
  },
  passengerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  passengerName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  checkButtons: {
    flexDirection: 'row',
  },
  checkButton: {
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    margin: 5,
  },
  rejectButton: {
    backgroundColor: '#FF7F7F',
  },
  acceptButton: {
    backgroundColor: '#90EE90',
  },
  checkedIn: {
    backgroundColor: '#7C1C39',
  },
  checkButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  beginRideButton: {
    backgroundColor: '#4E4E4E',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  beginRideButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});

export default TripCheck;