import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SignIn, SignUp, Splashscreen, Home, WO, Venue, Photograper, Souvenir, Catering } from '../pages';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name ="SplashScreen" 
            component ={Splashscreen} 
            options ={{headerShown: false}}
            />
            <Stack.Screen 
            name ="SignIn" 
            component ={SignIn} 
            options ={{headerShown: false}}
            />
            <Stack.Screen 
            name ="SignUp" 
            component ={SignUp} 
            options ={{headerShown: false}}
            />
            <Stack.Screen 
            name ="Home" 
            component ={Home} 
            options ={{headerShown: false}}
            />
            <Stack.Screen 
            name ="WO" 
            component ={WO} 
            options ={{headerShown: false}}
            />
            <Stack.Screen 
            name ="Catering" 
            component ={Catering} 
            options ={{headerShown: false}}
            />
        </Stack.Navigator>
    );
};

export default Router;