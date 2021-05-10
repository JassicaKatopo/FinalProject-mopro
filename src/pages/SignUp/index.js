/*import React from 'react';
import { StyleSheet, View } from 'react-native';
import {Header} from '../../components';

const SignUp = () => {
    return (
        <View>
            <Header title="Sign Up" />
        </View>
    );
};

export default SignUp;

const styles = StyleSheet.create({});
*/
import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import {Header, TextInput, Button, Gap} from '../../components';

const SignUp = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header title="Sign Up" onBack={() => navigation.goBack()} />
            <View style={styles.contentWrapper}>
                <TextInput title="Full Name" placeholder="Enter your full name"/>
                <Gap height={14} />
                <TextInput title="Email Address" placeholder="Enter your full name"/>
                <Gap height={14} />
                <TextInput title="Password" placeholder="Enter your password"/>
                <Gap height={45} />
                <Button title="Create Account" onPress={() => navigation.navigate('Home')}/>
            </View>
        </View>
    );
};

export default SignUp;

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    contentWrapper: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 30,
        paddingTop: 38,
        marginTop: 2,
        borderWidth: 1,
        borderColor: '#FFCCE1',
    },
})
