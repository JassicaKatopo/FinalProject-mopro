/*
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SignUp = () => {
    return (
        <View>
            <Text>Sign Up Page</Text>
        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({})
*/
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import {Header} from '../../components';

const SignUp = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header title="Sign Up" onBack={() => navigation.goBack()} />
            <View style={styles.contentWrapper}>
                <TextInput title="Full Name" 
                placeholder="Enter your full name" 
                />
                <TextInput
                title="Email Address"
                placeholder="Enter your email address"
                />
                <TextInput title="Password" 
                placeholder="Enter your password" 
                />
                <Button title="Create Account" />
            </View>
        </View>
    );
};

export default SignUp;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 24,
        paddingHorizontal: 24,
    }
})
