import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './SignUp';
import LogIn from './LogIn';
import HomeScreen from './Home'; 
import Dashboard from './Dashboard'; 
import IDVerify from './IDVerify'; 
import Photomodel from './Photomodel'; 
import Preferences from './Preferences'; 
import Menu from './Menu'; 
import Bookride from './Bookride';
import Offerride from './Offerride';
import UserSelectionDetails from './UserSelectionDetails';
import PassengerList from './PassengerList';
import TripDetails from './TripDetails';
import StartTrip from './StartTrip';
import TripCheck from './TripCheck';


const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  Home: undefined;
  SignUp: undefined;
  LogIn: undefined;
  Preferences: undefined;
  IDVerify: undefined;
  Photomodel: undefined;
  Dashboard: undefined;
  Menu: undefined;
  Bookride: undefined;
  Offerride: undefined;
  UserSelectionDetails: undefined;
  PassengerList: undefined;
  TripDetails: undefined;
  TripCheck: undefined;
  StartTrip: undefined;
};


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}  
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="LogIn"
          component={LogIn}
          // options={{ headerShown: false }}  
        />
        <Stack.Screen
          name="IDVerify"
          component={IDVerify}
          // options={{ headerShown: false }}  
        />
        <Stack.Screen
          name="Photomodel"
          component={Photomodel}
          // options={{ headerShown: false }}  
        />
        <Stack.Screen
          name="Preferences"
          component={Preferences}
          // options={{ headerShown: false }}  
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          // options={{ headerShown: false }}  
        />
        <Stack.Screen
          name="Menu"
          component={Menu}
          // options={{ headerShown: false }}  
        />
        <Stack.Screen
          name="Bookride"
          component={Bookride}
          // options={{ headerShown: false }}  
        />
        <Stack.Screen
          name="Offerride"
          component={Offerride}
          // options={{ headerShown: false }}  
        />
        <Stack.Screen
          name="UserSelectionDetails"
          component={UserSelectionDetails}
          options={{ title: 'Passenger Details' }} // Add the new screen
        />
        <Stack.Screen
          name="PassengerList"
          component={PassengerList}
          options={{ headerShown: false }} // Add the PassengerList screen
        />
        <Stack.Screen
          name="TripDetails"
          component={TripDetails}
          options={{ title: 'Trip Details' }} // Add the TripDetails screen
        />
        <Stack.Screen name="TripCheck" component={TripCheck} />
        <Stack.Screen name="StartTrip" component={StartTrip} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
