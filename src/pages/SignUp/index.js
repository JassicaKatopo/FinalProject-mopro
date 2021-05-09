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
                <Gap height={16} />
                <TextInput
                title="Email Address"
                placeholder="Enter your email address"
                />
                <Gap height={16} />
                <TextInput title="Password" 
                placeholder="Enter your password" 
                />
                <Gap height={24} />
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

const styles = StyleSheet.create({});
