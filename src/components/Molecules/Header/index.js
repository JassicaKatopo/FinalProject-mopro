import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, onBack } from 'react-native'
import Back from '../../../assets/Icons';
import Gap from '../../Atoms';

const Header = ({title}) => {
    return (
        <View style={styles.container}>
         {onBack && (
            <TouchableOpacity onPress={onBack} activityOpacity={0.7}>
                <View style={styles.back}>
                    <Back />
            </View>   
         </TouchableOpacity>
         )}
        <Gap width={26} />
        <Text style={styles.text}>{title}</Text>
     </View>
    );
};

export default Header

const styles = StyleSheet.create({
    container: {
        paddingLeft: 38,
        paddingVertical: 38,
        backgroundColor: 'white',
    },
    text: {
        fontSize: 22,
        fontWeight: "400",
    },
    back: {
        padding: 10,
    },
});
