import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Header, TextInput } from '../../components'

const Home = () => {
    return (
        <View style={styles.page}>
            <Header title="Home" />
            <View style={styles.contentWrapper}>
                <TextInput 
                    title="Email Address" 
                    />
                <Gap height={16} />
                <Button title="Wedding Organizer" />
                <Gap height={12} />
                <Button title="Venue" />
                <Gap height={12} />
                <Button title="Photographer" />
                <Gap height={12} />
                <Button title="Souvenirs" />
                <Gap height={12} />
                <Button title="Catering" />
            </View>
        </View>
    )
}

export default Home

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
 
