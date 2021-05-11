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
import React, {useState} from 'react';
import {StyleSheet, Text, View } from 'react-native';
import {Header, TextInput, Button, Gap} from '../../components';
import firebase from '../../config/Firebase';

const SignUp = ({navigation}) => {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = () => {
        
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(res => {
                const uid = res.user.uid;
                const data = {
                    fullName: fullName,
                    email: email,
                };
                firebase.database().ref(`users/${uid}`).set(data);
                setFullName('');
                setEmail('');
                setPassword('');
                navigation.navigate('SignIn');

            })
            .catch(error => console.log('error,', error));
    };

    return (
        <View style={styles.page}>
            <Header title="Sign Up" onBack={() => navigation.goBack()} />
            <View style={styles.contentWrapper}>
                <TextInput 
                    title="Full Name" 
                    placeholder="Enter your full name" 
                    value={fullName}
                    onChangeText={value=>setFullName(value)}
                />
                <Gap height={14} />
                <TextInput 
                    title="Email Address" 
                    placeholder="Enter your email address" 
                    value={email}
                    onChangeText={value=>setEmail(value)}
                />
                <Gap height={14} />
                <TextInput 
                    title="Password" 
                    placeholder="Enter your password" 
                    value={password}
                    onChangeText={value=>setPassword(value)}
                    secureTextEntry
                />
                <Gap height={45} />
                <Button 
                    title="Create Account" 
                    onPress={onSubmit}
                />
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
