import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

// This component displays the details of a user that the driver/passenger can accept or reject

const UserSelectionDetails = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.title}>Passenger Details</Text>
      <Image source={{ uri: 'path_to_image' }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <View style={styles.detailSection}>
          <Text style={styles.detailLabel}>Name:</Text>
          <Text style={styles.detailText}>Ruba Vignesh Balaji</Text>
        </View>
        <View style={styles.detailSection}>
          <Text style={styles.detailLabel}>Rating:</Text>
          <Text style={styles.detailText}>4.69</Text>
        </View>
        <View style={styles.detailSection}>
          <Text style={styles.detailLabel}>GT Meter:</Text>
          <Text style={styles.detailText}>98%</Text>
        </View>
        <View style={styles.detailSection}>
          <Text style={styles.detailLabel}>Interests:</Text>
          <Text style={styles.detailText}>Drama society, Film Society, Robotics Club</Text>
        </View>
        <View style={styles.detailSection}>
          <Text style={styles.detailLabel}>Languages:</Text>
          <Text style={styles.detailText}>English, Russian</Text>
        </View>
        <View style={styles.detailSection}>
          <Text style={styles.detailLabel}>Music:</Text>
          <Text style={styles.detailText}>Hip-Hop, Country, Jazz</Text>
        </View>
        <View style={styles.detailSection}>
          <Text style={styles.detailLabel}>Pronouns:</Text>
          <Text style={styles.detailText}>He/Him</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Reject</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Accept</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#FDE4D0',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4E4E4E',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  detailsContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  detailSection: {
    flexDirection: 'column', // Change to column to allow text wrapping
    alignItems: 'flex-start', // Align items to the start of the container
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  detailLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4E4E4E',
    marginBottom: 5, // Add margin to separate label from text
  },
  detailText: {
    fontSize: 16,
    color: '#4E4E4E',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  button: {
    backgroundColor: '#7C1C39',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    margin: 10,
    flex: 1,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default UserSelectionDetails;