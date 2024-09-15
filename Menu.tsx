import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-paper';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from './App';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 

const Menu = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      {/* Profile Header */}
      <View style={styles.profileContainer}>
        <Avatar.Image size={80} source={require('./assets/lyft_driver1.jpg')} />
        <View style={styles.profileTextContainer}>
          <Text style={styles.profileName}>Ruba Vignesh Balaji</Text>
          <View style={styles.ratingContainer}>
            <Icon name="star" size={16} color="#FFFFFF" />
            <Text style={styles.ratingText}>4.69</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.viewProfile}>View Profile</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Menu Options */}
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Dashboard')}>
          <Icon name="home" size={24} color="#7C1C39" />
          <Text style={styles.menuText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Bookride')}>
          <Icon name="car" size={24} color="#7C1C39" />
          <Text style={styles.menuText}>Find Ride</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="bookmark" size={24} color="#7C1C39" />
          <Text style={styles.menuText}>Booked Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="clock" size={24} color="#7C1C39" />
          <Text style={styles.menuText}>Past Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="bell" size={24} color="#7C1C39" />
          <Text style={styles.menuText}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="email" size={24} color="#7C1C39" />
          <Text style={styles.menuText}>Messages</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}  onPress={() => navigation.navigate('Preferences')}>
          <Icon name="cog" size={24} color="#7C1C39" />
          <Text style={styles.menuText}>Modify Preferences</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Home')}>
          <Icon name="logout" size={24} color="#7C1C39" />
          <Text style={styles.menuText}>Log out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDE4D0',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  profileTextContainer: {
    marginLeft: 15,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4E4E4E',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  ratingText: {
    color: '#FFFFFF',
    backgroundColor: '#7C1C39',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 10,
    marginLeft: 5,
  },
  viewProfile: {
    color: '#4E4E4E',
    marginTop: 10,
  },
  menuContainer: {
    marginTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  menuText: {
    marginLeft: 15,
    fontSize: 18,
    color: '#7C1C39',
  },
});

export default Menu;
