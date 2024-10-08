import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from './App'; // Adjust the import according to your navigation setup
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DateTimePicker from '@react-native-community/datetimepicker';

// Define types for the dropdown items
type DropdownItem = { label: string; value: string };

const BookRide = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  // State for 'From Campus' Input Field
  const [fromOpen, setFromOpen] = useState<boolean>(false);
  const [fromValue, setFromValue] = useState<string | null>(null);
  const [fromItems, setFromItems] = useState<DropdownItem[]>([
    { label: 'NOVA', value: 'nova' },
    { label: 'Blacksburg', value: 'blacksburg' },
  ]);

  // State for 'To Campus' Dropdown
  const [toOpen, setToOpen] = useState<boolean>(false);
  const [toValue, setToValue] = useState<string | null>(null);
  const [toItems, setToItems] = useState<DropdownItem[]>([]);

  // State for Date Input
  const [date, setDate] = useState<Date>(new Date());
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);

  // Update 'To Campus' Dropdown based on 'From Campus' selection
  const handleFromChange = (value: string | null) => {
    setFromValue(value);
    setToValue(null); // Reset 'To Campus' value when 'From Campus' changes

    if (value === 'nova') {
      setToItems([
        { label: 'VT NVC', value: 'vt_nvc' },
        { label: 'VT Innovation Campus', value: 'vt_innovation' },
      ]);
    } else if (value === 'blacksburg') {
      setToItems([
        { label: 'Torgerson Hall', value: 'torgerson' },
        { label: 'Squires', value: 'squires' },
        { label: 'VT Carillion', value: 'VTCarillion' },
      ]);
    }
  };

  // Handle Date Picker change
  const handleDateChange = (event: any, selectedDate?: Date) => {
    setShowDatePicker(Platform.OS === 'ios');
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  // Handle Find Ride
  const handleFindRide = async () => {
    try {
      const response = await fetch('http://172.29.91.19:3000/api/trips/find', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          passenger_id: 1, // Replace with actual passenger ID
          source: fromValue,
          destination: toValue,
          date: date.toISOString().split('T')[0], // Format date as YYYY-MM-DD
        }),
      });

      const data = await response.json();
      if (response.status === 200) {
        navigation.navigate('RideResults', { trips: data });
      } else {
        Alert.alert('Error', data.msg);
      }
    } catch (error) {
      console.error('Error finding ride:', error);
      Alert.alert('Error', 'An error occurred while finding a ride. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Find a ride</Text>
        <TouchableOpacity onPress={() => navigation.navigate('PassengerList')}>
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
          <Icon name="calendar" size={30} color="#33372C" style={styles.icon} />
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

      {/* Search Button */}
      <Button mode="contained" style={styles.searchButton} onPress={() => navigation.navigate('PassengerList')}>
        SEARCH
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
  icon: {
    marginLeft: 10,
    marginTop: -10,
  },
  searchButton: {
    backgroundColor: '#33372C',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
});

export default BookRide;