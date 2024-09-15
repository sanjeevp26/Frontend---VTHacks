import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Alert, ScrollView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Dropdown } from 'react-native-element-dropdown';
import Slider from '@react-native-community/slider';

const SignUp = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [hokieId, setHokieId] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [licenseNo, setLicenseNo] = useState('');
  const [vtClubs, setVtClubs] = useState(null);
  const [languages, setLanguages] = useState(null);
  const [musicGenre, setMusicGenre] = useState(null);
  const [memberType, setMemberType] = useState(null);
  const [pronouns, setPronouns] = useState('');
  const [convoLevel, setConvoLevel] = useState(5);

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    const postData = JSON.stringify({
      name,
      email_id: email,
      password,
      hokie_id: hokieId,
      phone_no: phoneNo,
      license_no: licenseNo,
      vt_clubs: vtClubs,
      languages,
      music_genre: musicGenre,
      member_type: memberType,
      pronouns,
      convo_level: convoLevel
    });

    try {
      const response = await fetch('http://172.29.91.19:3000/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: postData,
        redirect: 'follow'
      });

      const responseData = await response.json();
      console.log(responseData);

      if (response.status === 200) {
        Alert.alert('Registration successful', responseData.msg);
        navigation.navigate('LogIn');
      } else {
        Alert.alert('Registration failed', responseData.msg);
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Registration failed', 'An error occurred. Please try again.');
    }
  };

  const memberTypeData = [
    { label: 'Driver', value: 'Driver' },
    { label: 'Passenger', value: 'Passenger' }
  ];

  const vtClubItems = [
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
  ];

  const musicItems = [
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
  ];

  const languageItems = [
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
  ];

  return (
    <ImageBackground
      source={require('./assets/bg.png')} // Replace with your image URL or local image
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Welcome Onboard!</Text>

        <TextInput
          placeholder="Enter your full name"
          mode="flat"
          style={styles.input}
          placeholderTextColor="#000000"
          underlineColor="transparent"
          theme={{ colors: { text: '#000000', placeholder: '#000000', background: '#FDE4D0' } }}
          value={name}
          onChangeText={setName}
        />
        <TextInput
          placeholder="College Name"
          mode="flat"
          style={styles.input}
          placeholderTextColor="#000000"
          underlineColor="transparent"
          theme={{ colors: { text: '#000000', placeholder: '#000000', background: '#FDE4D0' } }}
          value={hokieId}
          onChangeText={setHokieId}
        />
        <TextInput
          placeholder="Enter your work email"
          mode="flat"
          style={styles.input}
          placeholderTextColor="#000000"
          underlineColor="transparent"
          theme={{ colors: { text: '#000000', placeholder: '#000000', background: '#FDE4D0' } }}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Enter Password"
          secureTextEntry
          mode="flat"
          style={styles.input}
          placeholderTextColor="#000000"
          underlineColor="transparent"
          theme={{ colors: { text: '#000000', placeholder: '#000000', background: '#FDE4D0' } }}
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          placeholder="Confirm Password"
          secureTextEntry
          mode="flat"
          style={styles.input}
          placeholderTextColor="#000000"
          underlineColor="transparent"
          theme={{ colors: { text: '#000000', placeholder: '#000000', background: '#FDE4D0' } }}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TextInput
          placeholder="Phone number"
          mode="flat"
          style={styles.input}
          placeholderTextColor="#000000"
          underlineColor="transparent"
          theme={{ colors: { text: '#000000', placeholder: '#000000', background: '#FDE4D0' } }}
          value={phoneNo}
          onChangeText={setPhoneNo}
        />

        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={vtClubItems}
          labelField="label"
          valueField="value"
          placeholder="Select a VT Club"
          value={vtClubs}
          onChange={item => {
            setVtClubs(item.value);
          }}
        />
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={musicItems}
          labelField="label"
          valueField="value"
          placeholder="Select a Music Genre"
          value={musicGenre}
          onChange={item => {
            setMusicGenre(item.value);
          }}
        />
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={languageItems}
          labelField="label"
          valueField="value"
          placeholder="Select a Language"
          value={languages}
          onChange={item => {
            setLanguages(item.value);
          }}
        />
        <Text style={styles.sliderLabel}>Conversation Level</Text>
        <Slider
          style={styles.slider}
          minimumValue={1}
          maximumValue={10}
          step={1}
          value={convoLevel}
          onValueChange={(value) => setConvoLevel(value)}
          minimumTrackTintColor="#7C1C39"
          maximumTrackTintColor="#ccc"
          thumbTintColor="#7C1C39"
        />
        <Text style={styles.sliderValue}>Selected Level: {convoLevel}</Text>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={memberTypeData}
          labelField="label"
          valueField="value"
          placeholder="Select Member Type"
          value={memberType}
          onChange={item => {
            setMemberType(item.value);
          }}
        />
        <TextInput
          placeholder="Pronouns"
          mode="flat"
          style={styles.input}
          placeholderTextColor="#000000"
          underlineColor="transparent"
          theme={{ colors: { text: '#000000', placeholder: '#000000', background: '#FDE4D0' } }}
          value={pronouns}
          onChangeText={setPronouns}
        />

        <Button mode="contained" style={styles.verifyButton} onPress={handleSignUp}>
          Verify
        </Button>

        <Text style={styles.footerText}>
          Already have an account?{' '}
          <Text style={styles.signInLink} onPress={() => navigation.navigate('LogIn')}>
            Sign In
          </Text>
        </Text>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  backButton: {
    alignSelf: 'flex-start',
  },
  backArrow: {
    fontSize: 40,
    color: '#B45937',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#B45937',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#FDE4D0',
    marginBottom: 20,
    borderRadius: 20,
    paddingHorizontal: 10,
    color: '#000000',
    height: 55,
  },
  dropdown: {
    backgroundColor: '#FDE4D0',
    borderRadius: 20,
    marginBottom: 20,
    paddingHorizontal: 10,
    height: 55,
  },
  placeholderStyle: {
    color: '#000000',
    fontSize: 16,
  },
  selectedTextStyle: {
    color: '#000000',
    fontSize: 16,
  },
  inputSearchStyle: {
    color: '#000000',
    height: 40,
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  sliderLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4E4E4E',
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  extraButton: {
    backgroundColor: '#FDE4D0',
    width: '45%',
    borderRadius: 20,
  },
  buttonText: {
    color: '#000000',
  },
  verifyButton: {
    backgroundColor: '#B45937',
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  footerText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#4E4E4E',
  },
  signInLink: {
    color: '#B45937',
    fontWeight: 'bold',
  },
});

export default SignUp;