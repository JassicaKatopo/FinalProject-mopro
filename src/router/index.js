import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
<<<<<<< HEAD
import { SignIn, SignUp, Splashscreen, Home, WO, Venue, Photograper, Souvenir, Catering } from '../pages';
=======
import Splashscreen from '../pages/Spalshscreen';
import { SignIn } from '../pages';

>>>>>>> 3f70fbf906c3140b061247cf9ceba15d5ad3c803

const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
<<<<<<< HEAD
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
            name ="Venue" 
            component ={Venue} 
            options ={{headerShown: false}}
            />
            <Stack.Screen 
            name ="Photograper" 
            component ={Photograper} 
            options ={{headerShown: false}}
            />
            <Stack.Screen 
            name ="Souvenir" 
            component ={Souvenir} 
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
=======
            <Stack.Screen name="SplashScreen" 
            component={Splashscreen}
            options={{headerShown: false}} 
            />
            <Stack.Screen name="SignIn" 
            component={SignIn}
            options={{headerShown: false}}  
            />
        </Stack.Navigator>
    );
           
};

export default Router
>>>>>>> 3f70fbf906c3140b061247cf9ceba15d5ad3c803
