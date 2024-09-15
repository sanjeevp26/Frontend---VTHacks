import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from './App'; // Adjust the import according to your navigation setup
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { getData } from './utils/asyncStorage'; // Import the utility

// Define types for the dropdown items
type DropdownItem = { label: string; value: string };

interface User {
  id: string;
  name: string;
  // Add other properties if needed
}

const CreateRide = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [user, setUser] = useState<User | null>(null);

  // State for 'From Campus' Input Field
  const [fromOpen, setFromOpen] = useState<boolean>(false);
  const [fromValue, setFromValue] = useState<string | null>(null);
  const [fromItems, setFromItems] = useState<DropdownItem[]>([
    { label: 'Blacksburg', value: 'blacksburg' },
    { label: 'NOVA', value: 'nova' },
  ]);

  // State for 'To Campus' Dropdown
  const [toOpen, setToOpen] = useState<boolean>(false);
  const [toValue, setToValue] = useState<string | null>(null);
  const [toItems, setToItems] = useState<DropdownItem[]>([]);

  // State for Date Input
  const [date, setDate] = useState<Date>(new Date());
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);

  // State for Vehicle Number Input
  const [vehicleNo, setVehicleNo] = useState<string>('');

  useEffect(() => {
    const fetchUserData = async () => {
      const storedUser = await getData('userData');
      console.log('Fetched user data:', storedUser); // Debug log
      setUser(storedUser);
    };

    fetchUserData();
  }, []);

  // Update 'To Campus' Dropdown based on 'From Campus' selection
  const handleFromChange = (value: string | null) => {
    setFromValue(value);

    if (value === 'nova') {
      setToItems([
        { label: 'Torgerson Hall', value: 'torgerson' },
        { label: 'Squires', value: 'squires' },
        { label: 'VT Carillion', value: 'VTCarillion' },
      ]);
      setToValue('blacksburg'); // Automatically set 'To Campus' to 'blacksburg'
    } else if (value === 'blacksburg') {
      setToItems([
        { label: 'VT NVC', value: 'vt_nvc' },
        { label: 'VT Innovation Campus', value: 'vt_innovation' },
      ]);
      setToValue('nova'); // Automatically set 'To Campus' to 'nova'
    } else {
      setToValue(null); // Reset 'To Campus' value if 'From Campus' is not 'nova' or 'blacksburg'
    }
  };

  // Handle Date Picker change
  const handleDateChange = (event: any, selectedDate?: Date) => {
    setShowDatePicker(Platform.OS === 'ios');
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  // Handle Create Ride
  const handleCreateRide = async () => {
    console.log('User object:', user); // Debug log
    console.log('Driver ID:', user?.user_id); // Debug log
    console.log('Source:', fromValue); // Debug log
    console.log('Destination:', toValue); // Debug log
    console.log('Date:', date.toISOString().split('T')[0]); // Debug log
    console.log('Vehicle No:', vehicleNo); // Debug log

    try {
      const response = await fetch('http://172.29.91.19:3000/api/trips/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          driver_id: user?.user_id, // Use the actual driver ID from user data
          source: fromValue,
          destination: toValue,
          date: date.toISOString().split('T')[0], // Format date as YYYY-MM-DD
          vehicle_no: vehicleNo, // Include vehicle number
        }),
      });

      const data = await response.json();
      console.log('API response:', data); // Debug log
      if (response.status === 200) {
        Alert.alert('Success', 'Ride created successfully');
        navigation.navigate('Dashboard'); // Navigate to the dashboard or another screen
      } else {
        Alert.alert('Error', data.msg);
      }
    } catch (error) {
      console.error('Error creating ride:', error);
      Alert.alert('Error', 'An error occurred while creating the ride. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Create a ride</Text>
        <TouchableOpacity onPress={() => console.log('Profile clicked')}>
          <Icon name="account-circle" size={50} color="#33372C" />
        </TouchableOpacity>
      </View>

      {/* From Campus Dropdown */}
      <DropDownPicker
        open={fromOpen}
        value={fromValue}
        items={fromItems}
        setOpen={setFromOpen}
        setValue={setFromValue}
        setItems={setFromItems}
        onChangeValue={handleFromChange}
        style={styles.dropdown}
        placeholder="From Campus"
        zIndex={3000} // Ensure 'From Campus' dropdown is rendered above 'To Campus'
      />

      {/* To Campus Dropdown */}
      <DropDownPicker
        open={toOpen}
        value={toValue}
        items={toItems}
        setOpen={setToOpen}
        setValue={setToValue}
        setItems={setToItems}
        style={styles.dropdown}
        placeholder="To Campus"
        disabled={!fromValue} // Disable until a 'From Campus' value is selected
        zIndex={2000} // Ensure 'To Campus' dropdown is rendered below 'From Campus'
      />

      {/* Date Input */}
      <View style={styles.dateContainer}>
        <TextInput
          label="Date"
          mode="flat"
          value={date.toDateString()}
          style={styles.input}
          theme={{
            colors: { text: '#FFFFFF', placeholder: '#FFFFFF', background: '#7C1C39' },
          }}
          placeholderTextColor="#FFFFFF"
          underlineColor="transparent"
          editable={false}
        />
        <TouchableOpacity onPress={() => setShowDatePicker(true)}>
          <Icon name="calendar" size={30} color="#33372C" style={styles.calendarIcon} />
        </TouchableOpacity>
      </View>

      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}

      {/* Vehicle Number Input */}
      <TextInput
        label="Vehicle Number"
        mode="flat"
        value={vehicleNo}
        onChangeText={setVehicleNo}
        style={styles.input}
        theme={{
          colors: { text: '#FFFFFF', placeholder: '#FFFFFF', background: '#7C1C39' },
        }}
        placeholderTextColor="#FFFFFF"
        underlineColor="transparent"
      />

      {/* Create Button */}
      <Button mode="contained" style={styles.createButton} onPress={handleCreateRide}>
        CREATE
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
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4E4E4E',
  },
  dropdown: {
    backgroundColor: '#7C1C39',
    borderColor: '#7C1C39',
    marginBottom: 20,
    borderRadius: 8,
  },
  input: {
    backgroundColor: '#7C1C39',
    marginBottom: 20,
    borderRadius: 8,
    color: '#FFFFFF',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  calendarIcon: {
    marginLeft: 10,
    marginTop: -10,
  },
  createButton: {
    backgroundColor: '#33372C',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
});

export default CreateRide;