import React from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './weather_project';
import Settings from './Settings';


const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Settings: Settings
}, {initialRouteName: "Home"});

export default HomeStack;