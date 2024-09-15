import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Slider from '@react-native-community/slider';

const Preferences = () => {
  // State for VT Clubs Dropdown
  const [vtClubOpen, setVtClubOpen] = useState(false);
  const [vtClubValue, setVtClubValue] = useState(null);
  const [vtClubItems, setVtClubItems] = useState([
    { label: 'Chess Club', value: 'chess' },
    { label: 'Debate Team', value: 'debate' },
    { label: 'Robotics Club', value: 'robotics' },
    { label: 'Drama Society', value: 'drama' },
    { label: 'Dance Team', value: 'dance' },
    { label: 'A Cappella', value: 'acappella' },
    { label: 'Anime Club', value: 'anime' },
    { label: 'Eco Club', value: 'eco' },
    { label: 'Film Society', value: 'film' },
    { label: 'Finance Club', value: 'finance' },
  ]);

  // State for Music Dropdown
  const [musicOpen, setMusicOpen] = useState(false);
  const [musicValue, setMusicValue] = useState(null);
  const [musicItems, setMusicItems] = useState([
    { label: 'Rock', value: 'rock' },
    { label: 'Pop', value: 'pop' },
    { label: 'Hip-Hop', value: 'hiphop' },
    { label: 'Jazz', value: 'jazz' },
    { label: 'Country', value: 'country' },
    { label: 'R&B', value: 'r&b' },
    { label: 'Electronic', value: 'electronic' },
    { label: 'Classical', value: 'classical' },
    { label: 'Blues', value: 'blues' },
    { label: 'Reggae', value: 'reggae' },
  ]);

  // State for the Social Levels Slider
  const [socialValue, setSocialValue] = useState(5);

  // State for Languages Dropdown
  const [languageOpen, setLanguageOpen] = useState(false);
  const [languageValue, setLanguageValue] = useState(null);
  const [languageItems, setLanguageItems] = useState([
    { label: 'English', value: 'english' },
    { label: 'Spanish', value: 'spanish' },
    { label: 'Chinese', value: 'chinese' },
    { label: 'Tagalog', value: 'tagalog' },
    { label: 'Vietnamese', value: 'vietnamese' },
    { label: 'Arabic', value: 'arabic' },
    { label: 'French', value: 'french' },
    { label: 'Korean', value: 'korean' },
    { label: 'Russian', value: 'russian' },
    { label: 'German', value: 'german' },
  ]);

  // Function to handle the opening of a dropdown and close others
  const handleOpen = (dropdown: string) => {
    if (dropdown === 'vtClub') {
      setMusicOpen(false);
      setLanguageOpen(false);
    } else if (dropdown === 'music') {
      setVtClubOpen(false);
      setLanguageOpen(false);
    } else if (dropdown === 'language') {
      setVtClubOpen(false);
      setMusicOpen(false);
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
        setOpen={() => {
          handleOpen('vtClub');
          setVtClubOpen(!vtClubOpen);
        }}
        setValue={setVtClubValue}
        setItems={setVtClubItems}
        style={styles.dropdown}
        zIndex={5000} // Ensure VT Clubs dropdown is rendered on top
        placeholder="Select a club"
      />

      {/* Music Dropdown */}
      <Text style={styles.question}>2. Music</Text>
      <DropDownPicker
        open={musicOpen}
        value={musicValue}
        items={musicItems}
        setOpen={() => {
          handleOpen('music');
          setMusicOpen(!musicOpen);
        }}
        setValue={setMusicValue}
        setItems={setMusicItems}
        style={styles.dropdown}
        zIndex={4000} // Ensure Music dropdown is rendered above Social Levels
        placeholder="Select a genre"
      />

      {/* Social Levels Slider */}
      <Text style={styles.question}>3. Social Levels</Text>
      <Slider
        style={styles.slider}
        minimumValue={1}
        maximumValue={10}
        step={1}
        value={socialValue}
        onValueChange={(value) => setSocialValue(value)}
        minimumTrackTintColor="#7C1C39"
        maximumTrackTintColor="#ccc"
        thumbTintColor="#7C1C39"
      />
      <Text style={styles.sliderValue}>Selected Level: {socialValue}</Text>

      {/* Languages Dropdown */}
      <Text style={styles.question}>4. Languages</Text>
      <DropDownPicker
        open={languageOpen}
        value={languageValue}
        items={languageItems}
        setOpen={() => {
          handleOpen('language');
          setLanguageOpen(!languageOpen);
        }}
        setValue={setLanguageValue}
        setItems={setLanguageItems}
        style={styles.dropdown}
        zIndex={3000} // Ensure Languages dropdown is rendered above Social Levels
        placeholder="Select a language"
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
  slider: {
    width: '100%',
    height: 40,
    marginBottom: 10,
  },
  sliderValue: {
    fontSize: 16,
    color: '#4E4E4E',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default Preferences;
