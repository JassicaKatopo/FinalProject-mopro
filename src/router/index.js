import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SignIn, SignUp, Spalshscreen} from '../pages';


const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Spalshscreen" component={Spalshscreen} options={{headerShown: false}} />
            <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}} />
            <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}

export default Router;


