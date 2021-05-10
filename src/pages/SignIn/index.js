import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Gap, Header, TextInput } from '../../components'

const SignIn = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header title="Sign In"/>
            <View style={styles.contentWrapper}>
                <TextInput 
                    title="Email Address" 
                    placeholder="Type your email address"
                />
                <Gap height={14} />
                <TextInput 
                    title="Password" 
                    placeholder="Type your password"
                    />
                <Gap height={45} />
                <Button 
                    title="Sign In"
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
