/*import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Venue = () => {
    return (
        <View>
            <Text>Venue</Text>
        </View>
    )
}

export default Venue

const styles = StyleSheet.create({})
*/
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Header, TextInput, Gap } from '../../components'

const Venue = () => {
    return (
        <View style={styles.page}>
            <Header title="Venue" />
            <View style={styles.contentWrapper}>
                
                <Gap height={12} />
                <Button title="Rumah Alam" />
                <Gap height={12} />
                <Button title="Nyiur Melambai" />
            </View>
        </View>
    )
}

export default Venue;

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