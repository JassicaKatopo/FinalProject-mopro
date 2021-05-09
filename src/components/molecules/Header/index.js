import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { IconBack } from '../../../assets/icon';
import {Gap} from '../../atoms';

const Header = ({title, onBack}) => {
    return (
     <View style={styles.container}>
         {onBack && (
            <TouchableOpacity onPress={onBack} activityOpacity={0.7}>
                <View style={styles.back}>
                    <IconBack />
            </View>   
         </TouchableOpacity>
         )}
        <Gap width={26} />
        <Text style={styles.text}>{title}</Text>
     </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        paddingLeft: 24,
        paddingVertical: 38,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        fontSize: 22,
        fontFamily: 'Poppins-Medium',
    },
    back: {
        padding: 10,
    },
});