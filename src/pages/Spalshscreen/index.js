import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { Logo } from '../../assets'

const Splashscreen = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('SignIn');
        }, 3000);
    }, []);

    return (
        <View style={styles.page}>
            <Logo />
            <Text style={styles.text}>Welcome to Wedds</Text>
        </View>
    );
};

export default Splashscreen

const styles = StyleSheet.create({
    page:{
        flex: 1,
        backgroundColor: '#FFCCE1',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        fontSize: 25,
        fontWeight: '500',
    },
});
