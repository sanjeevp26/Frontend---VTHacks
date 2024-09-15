import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Button } from 'react-native-paper';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from './App'; // Adjust based on your navigation setup

const Preferences = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  // State for VT Clubs
  const [vtClubOpen, setVtClubOpen] = useState(false);
  const [vtClubValue, setVtClubValue] = useState(null);
  const [vtClubItems, setVtClubItems] = useState([
    { label: 'Robotics Club', value: 'robotics' },
    { label: 'Photography Club', value: 'photography' },
    { label: 'Coding Club', value: 'coding' },
  ]);

  // State for Music
  const [musicOpen, setMusicOpen] = useState(false);
  const [musicValue, setMusicValue] = useState(null);
  const [musicItems, setMusicItems] = useState([
    { label: 'Rock', value: 'rock' },
    { label: 'Classical', value: 'classical' },
    { label: 'Jazz', value: 'jazz' },
  ]);

  // State for Social Levels
  const [socialOpen, setSocialOpen] = useState(false);
  const [socialValue, setSocialValue] = useState(null);
  const [socialItems, setSocialItems] = useState([
    { label: 'Introvert', value: 'introvert' },
    { label: 'Ambivert', value: 'ambivert' },
    { label: 'Extrovert', value: 'extrovert' },
  ]);

  // State for Languages
  const [languageOpen, setLanguageOpen] = useState(false);
  const [languageValue, setLanguageValue] = useState(null);
  const [languageItems, setLanguageItems] = useState([
    { label: 'English', value: 'english' },
    { label: 'Spanish', value: 'spanish' },
    { label: 'Mandarin', value: 'mandarin' },
  ]);

  // Function to close all other dropdowns when one is opened
  const handleOpen = (dropdown: 'vtClub' | 'music' | 'social' | 'language') => {
    if (dropdown === 'vtClub') {
      setMusicOpen(false);
      setSocialOpen(false);
      setLanguageOpen(false);
    } else if (dropdown === 'music') {
      setVtClubOpen(false);
      setSocialOpen(false);
      setLanguageOpen(false);
    } else if (dropdown === 'social') {
      setVtClubOpen(false);
      setMusicOpen(false);
      setLanguageOpen(false);
    } else if (dropdown === 'language') {
      setVtClubOpen(false);
      setMusicOpen(false);
      setSocialOpen(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Preference Survey</Text>

      {/* VT Clubs Dropdown */}
      <Text style={styles.question}>1. VT Clubs</Text>
      <DropDownPicker
        open={vtClubOpen}
        value={vtClubValue}
        items={vtClubItems}
        setOpen={() => { handleOpen('vtClub'); setVtClubOpen(!vtClubOpen); }}
        setValue={setVtClubValue}
        setItems={setVtClubItems}
        style={styles.dropdown}
        containerStyle={{ zIndex: 4000 }}
        placeholder="Select a club"
      />

      {/* Music Dropdown */}
      <Text style={styles.question}>2. Music</Text>
      <DropDownPicker
        open={musicOpen}
        value={musicValue}
        items={musicItems}
        setOpen={() => { handleOpen('music'); setMusicOpen(!musicOpen); }}
        setValue={setMusicValue}
        setItems={setMusicItems}
        style={styles.dropdown}
        containerStyle={{ zIndex: 3000 }}
        placeholder="Select a genre"
      />

      {/* Social Levels Dropdown */}
      <Text style={styles.question}>3. Social Levels</Text>
      <DropDownPicker
        open={socialOpen}
        value={socialValue}
        items={socialItems}
        setOpen={() => { handleOpen('social'); setSocialOpen(!socialOpen); }}
        setValue={setSocialValue}
        setItems={setSocialItems}
        style={styles.dropdown}
        containerStyle={{ zIndex: 2000 }}
        placeholder="Select a level"
      />

      {/* Languages Dropdown */}
      <Text style={styles.question}>4. Languages</Text>
      <DropDownPicker
        open={languageOpen}
        value={languageValue}
        items={languageItems}
        setOpen={() => { handleOpen('language'); setLanguageOpen(!languageOpen); }}
        setValue={setLanguageValue}
        setItems={setLanguageItems}
        style={styles.dropdown}
        containerStyle={{ zIndex: 1000 }}
        placeholder="Select a language"
      />

      {/* Finish Button */}
      <Button
        mode="contained"
        style={styles.finishButton}
        onPress={() => navigation.navigate('Dashboard')}
      >
        Finish
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
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4E4E4E',
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4E4E4E',
  },
  dropdown: {
    backgroundColor: '#7C1C39',
    borderColor: '#7C1C39',
    marginBottom: 20,
    borderRadius: 8,
  },
  finishButton: {
    backgroundColor: '#33372C',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
});

export default Preferences;
