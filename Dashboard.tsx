import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ImageBackground } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from './App'; 
import { getData } from './utils/asyncStorage'; // Import the utility

interface User {
  id: string;
  name: string;
  // Add other properties if needed
}

const Dashboard = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [upcomingTrips, setUpcomingTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const storedUser = await getData('userData');
      console.log('Fetched user data:', storedUser); // Debug log
      setUser(storedUser);
      return storedUser;
    };

    const fetchUpcomingTrips = async (userId: string) => {
      console.log('Fetching upcoming trips for user ID:', userId); // Debug log
      try {
        const response = await fetch(`http://172.29.91.19:3000/api/trips/upcoming/${userId}`);
        const data = await response.json();
        console.log('Fetched upcoming trips:', data); // Debug log
        setUpcomingTrips(data);
      } catch (error) {
        console.error('Error fetching upcoming trips:', error);
        setUpcomingTrips([]); // Set to empty array on error
      } finally {
        setLoading(false);
      }
    };

    const initialize = async () => {
      const user = await fetchUserData();
      if (user && user.user_id) {
        await fetchUpcomingTrips(user.user_id);
      } else {
        setLoading(false);
      }
    };

    initialize();
  }, []);

  const renderTrip = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cardText}>Trip to {item.destination}</Text>
      <Text style={styles.cardSubText}>Start Location: {item.source}</Text>
      <Text style={styles.cardSubText}>Date: {item.date}</Text>
      <Image
        source={{ uri: 'https://example.com/calendar-icon-url.png' }} // Replace with your calendar icon
        style={styles.icon}
      />
      <Button
        mode="contained"
        style={styles.actionButton}
        onPress={() => navigation.navigate('TripDetails', { tripId: item.trip_id })}
      >
        View Trip Details
      </Button>
    </View>
  );

  return (
    <ImageBackground
      source={require('./assets/bg.png')} // Replace with your image URL or local image
      style={styles.container}
    >
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello {user ? user.name : 'Guest'}!</Text>
        
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

      {loading ? (
        <Text>Loading...</Text>
      ) : upcomingTrips.length === 0 ? (
        <View style={styles.card}>
          <Text style={styles.cardText}>You have no Upcoming Trips</Text>
          <Image
            source={{ uri: 'https://example.com/calendar-icon-url.png' }} // Replace with your calendar icon
            style={styles.icon}
          />
        </View>
      ) : (
        <FlatList
          data={upcomingTrips}
          renderItem={renderTrip}
          keyExtractor={(item) => item.trip_id.toString()}
        />
      )}

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
        onPress={() => navigation.navigate('CreateRide')}
      >
        Offer a ride
      </Button>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
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
    color: '#B45937',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#B45937',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#FDE4D0',
    borderRadius: 20,
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  cardText: {
    fontSize: 18,
    color: '#000000',
    marginBottom: 5,
  },
  cardSubText: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 5,
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  actionButton: {
    backgroundColor: '#B45937',
    marginBottom: 15,
    borderRadius: 20,
  },
});

export default Dashboard;