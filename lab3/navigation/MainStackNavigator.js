//Imports as well as pulling information from bottom tab at stack nav.
import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import DetailScreen from '../screens/DetailScreen';

// End of Imports

/******************/

//Nav bar creation

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Detail: DetailScreen,
}, {initialRouteName:"Home"});

export default HomeStack;

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});
