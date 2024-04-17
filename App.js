import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Todos from './src/screens/Todos';
import User from './src/screens/User';
import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';
import CreateUser from './src/screens/CreateUser';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/screens/Home';
import Footer from './src/screens/Footer';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const StackApp = () => (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}
      tabBar={props => <Footer {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Todo" component={Todos} />
      <Tab.Screen name="User" component={User} />
    </Tab.Navigator>
  );

  const handleStateChange = state => {
    const currentRouteName = state?.routes[state.index]?.name;
    if (currentRouteName === 'HomrSetack') {
      navigation.navigate('HomeStack');
    }
  };

  return (
    <NavigationContainer onStateChange={handleStateChange}>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Register" component={CreateUser} />
        <Stack.Screen name="HomeStack" component={StackApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
