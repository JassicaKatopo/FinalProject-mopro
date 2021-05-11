import React, {useState} from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Gap, Header, TextInput } from '../../components'
import firebase from '../../config/Firebase';

const SignIn = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] =useState('');

    const onSubmit =() =>{
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(res => navigation.navigate('Home'))
            .catch(error => console.log('error,', error))
    }

    return (
        <View style={styles.page}>
            <Header title="Sign In"/>
            <View style={styles.contentWrapper}>
                <TextInput 
                    title="Email Address" 
                    placeholder="Type your email address"
                    value={email}
                    onChangeText={value => setEmail(value)}
                />
                <Gap height={14} />
                <TextInput 
                    title="Password" 
                    placeholder="Type your password"
                    value={password}
                    onChangeText={value => setPassword(value)}
                    secureTextEntry
                    />
                <Gap height={45} />
                <Button 
                    title="Sign In"
                    onPress={onSubmit}
                    />
                <Gap height={40} />
                <Button 
                    title="Create New Account" 
                    color="#E3D9DD"
                    onPress={() => navigation.navigate('SignUp')}
                    /> 
            </View>   
        </View>
    );
};

export default SignIn;

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
});
