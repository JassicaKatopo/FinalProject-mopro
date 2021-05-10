import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Header, TextInput } from '../../components'

const WO = () => {
    return (
        <View style={styles.page}>
            <Header title="Wedding Organizer" />
            <View style={styles.contentWrapper}>
                
                <Gap height={12} />
                <Button title="Mopro Organizer" />
                <Gap height={12} />
                <Button title="Dawn Organizer" />
            </View>
        </View>
    )
}

export default WO;

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
