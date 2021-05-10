import 'react-native-gesture-handler';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Spalshscreen, SignIn, SignUp, Home, WO, Catering} from './pages'
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';

const App = () => {
    return (
        <NavigationContainer>
          <Router />
        </NavigationContainer>
    );
};

export default App;