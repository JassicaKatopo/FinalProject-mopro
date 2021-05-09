import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Gap, Header, TextInput } from '../../components'

const SignUp = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header title="Sign Up" onBack={() => navigation.goBack()} />
            <View style={styles.contentWrapper}>
                <TextInput title="Username" 
                placeholder="Type your username" 
                />
                <Gap height={16} />
                <TextInput
                title="Email Address"
                placeholder="type your email address"
                />
                <Gap height={16} />
                <TextInput title="Password" 
                placeholder="Type your password" 
                />
                <Gap height={24} />
                <Button title="Create Account"
                onPress={() => navigation.navigate('SignIn')} />

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
