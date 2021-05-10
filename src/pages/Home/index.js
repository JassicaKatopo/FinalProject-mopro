import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Header, TextInput, Gap } from '../../components'

const Home = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header title="Home" />
            
            <View style={styles.contentWrapper}>
                <Gap height={16} />
                <Button title="Wedding Organizer" onPress={() => navigation.navigate('WO')} />
                <Gap height={12} />
                <Button title="Venue" onPress={() => navigation.navigate('Venue')}/>
                <Gap height={12} />
                <Button title="Photograper" onPress={() => navigation.navigate('Photograper')} />
                <Gap height={12} />
                <Button title="Souvenirs" onPress={() => navigation.navigate('Souvenir')}/>
                <Gap height={12} />
                <Button title="Catering" onPress={() => navigation.navigate('Catering')}/>
                <Gap height={120} />
                <Button title="Check Out" color="#E3D9DD" />
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