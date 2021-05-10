import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Back} from '../../../assets/Icons';
import {Gap} from '../../Atoms';

const Header = ({title}) => {
    return (
    <View style={styles.container}>
        <View style={styles.back}>
            <Back/>
        </View>
        <Gap width={26}/>
        <Text style={styles.text}>{title}</Text>
     </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        paddingLeft: 38,
        paddingVertical: 38,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        fontSize: 22,
        fontWeight: "400",
    },
    back: {
        backgroundColor: 'white',
    },
});
