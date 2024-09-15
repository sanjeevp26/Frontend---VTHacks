import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
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

  // State for 'From' Input Field
  const [fromOpen, setFromOpen] = useState<boolean>(false);
  const [fromValue, setFromValue] = useState<string | null>(null);
  const [fromItems, setFromItems] = useState<DropdownItem[]>([
    { label: 'NOVA', value: 'nova' },
    { label: 'Blacksburg', value: 'blacksburg' },
  ]);

  // State for Campus Selection Dropdown
  const [campusOpen, setCampusOpen] = useState<boolean>(false);
  const [campusValue, setCampusValue] = useState<string | null>(null);
  const [campusItems, setCampusItems] = useState<DropdownItem[]>([]);

  // State for Date Input
  const [date, setDate] = useState<Date>(new Date());
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);

  // Update Campus Dropdown based on From selection
  const handleFromChange = (value: string | null) => {
    setFromValue(value);
    setCampusValue(null); // Reset campus value when "From" changes

    if (value === 'nova') {
      setCampusItems([
        { label: 'VT NVC', value: 'vt_nvc' },
        { label: 'VT Innovation Campus', value: 'vt_innovation' },
      ]);
    } else if (value === 'blacksburg') {
      setCampusItems([
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

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Find a ride</Text>
        <TouchableOpacity onPress={() => console.log('Profile clicked')}>
          <Icon name="account-circle" size={50} color="#33372C" />
        </TouchableOpacity>
      </View>

      {/* From Dropdown */}
      <DropDownPicker
        open={fromOpen}
        value={fromValue}
        items={fromItems}
        setOpen={setFromOpen}
        setValue={setFromValue}
        setItems={setFromItems}
        onChangeValue={handleFromChange}
        style={styles.dropdown}
        placeholder="From"
      />

      {/* Campus Selection Dropdown */}
      <DropDownPicker
        open={campusOpen}
        value={campusValue}
        items={campusItems}
        setOpen={setCampusOpen}
        setValue={setCampusValue}
        setItems={setCampusItems}
        style={styles.dropdown}
        placeholder="Campus Selection"
        disabled={!fromValue} // Disable until a 'From' value is selected
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
      <Button mode="contained" style={styles.searchButton} onPress={() => console.log('Search clicked')}>
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
