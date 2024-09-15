import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from './App'; 

const Dashboard = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello Ruba!</Text>
        
        {/* Profile Image with onPress for Navigation */}
        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
          <Image
            source={require('./assets/lyft_driver1.jpg')}
            style={styles.profileImage}
          />
        </TouchableOpacity>
      </View>

      {/* Upcoming Section */}
      <Text style={styles.sectionTitle}>Upcoming</Text>

      {/* Upcoming Trips Card */}
      <View style={styles.card}>
        <Text style={styles.cardText}>You have no Upcoming Trips</Text>
        <Image
          source={{ uri: 'https://example.com/calendar-icon-url.png' }} // Replace with your calendar icon
          style={styles.icon}
        />
      </View>

      {/* Action Buttons */}
      <Button
        mode="contained"
        style={styles.actionButton}
        onPress={() => navigation.navigate('Bookride')}  
      >
        Find your ride
      </Button>

      <Button
        mode="contained"
        style={styles.actionButton}
        onPress={() => navigation.navigate('Offerride')}
      >
        Offer a ride
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDE4D0',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4E4E4E',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#7C1C39',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#7C1C39',
    borderRadius: 10,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  cardText: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  icon: {
    width: 40,
    height: 40,
  },
  actionButton: {
    backgroundColor: '#7C1C39',
    marginBottom: 15,
    borderRadius: 20,
  },
});

export default Dashboard;
