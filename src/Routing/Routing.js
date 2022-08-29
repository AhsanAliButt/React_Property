import {View, Text} from 'react-native';
import React from 'react';
import LandingScreen from '../components/screens/Landing/Landing';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '../components/screens/SignIn/SignIn';
// import SignUpScreen from '../src/components/screens/SignUp/SignUp';
// import HomeScreen from '../src/components/screens/Home/Home';
// import SignOutScreen from '../src/components/screens/SignOut/SignOut';

const Stack = createNativeStackNavigator();

const Routing = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        {/* <Stack.Screen name="SignUp" component={SignUpScreen} /> */}
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        {/* <Stack.Screen name="SignOut" component={SignOutScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routing;
